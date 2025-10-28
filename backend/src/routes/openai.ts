import express from 'express';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';
import { getRandomHeroesPrompt, getStoryStartPrompt } from '../prompts/setup';
import { parseGPTJson } from '../utils/common';
import { EDBTables } from '../enums/db';
import { IHero, IHeroWithStoryId, IRandomHeroesCreateResponse } from '../types/heroes';
import { IStoryStartCreateResponse } from '../types/stories';

const router = express.Router();

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_ANON_KEY || '');

// start story endpoint
router.post('/stories/start', async (req, res) => {
  const { setupInfo, storyID } = req.body;
  const { setting, heroes, opening } = setupInfo;
  // prompts
  const settingPrompt = setting.id === 'custom' ? setting.customPrompt : setting.prompt;
  let heroesPrompt = heroes.id === 'custom' ? heroes.customPrompt : '';
  let heroesList: IHero[] = [];
  const openingPrompt = opening.id === 'custom' ? opening.customPrompt : opening.prompt;

  // if random heroes option selected, generate them
  if(heroes.id === 'random-heroes') {
    const randomHeroesPrompt = getRandomHeroesPrompt(heroes.partySize, setting.title, openingPrompt, setting.tone);

     const randomHeroesResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant for a dungeon master game. Keep responses concise and engaging."
        },
        {
          role: "user",
          content: randomHeroesPrompt
        }
      ],
    });

    // parse the response, get the heroes text and list
    const { heroesText, heroesList: newHeroesList } = parseGPTJson<IRandomHeroesCreateResponse>(randomHeroesResponse.choices[0]?.message?.content || '{}') || { heroesText: '', heroesList: [] };
    console.log('HERO RESPONSE:', heroesText, newHeroesList);

    // set the heroes text and list
    heroesPrompt = heroesText;
    heroesList = newHeroesList;
  }

  // get the start game prompt
  const startGamePrompt = getStoryStartPrompt(settingPrompt, setting.tone, setting.dmStyle, heroesPrompt, openingPrompt);
  console.log('START GAME PROMPT:', startGamePrompt);

  // send the start game prompt to the openai api
  const startGameResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: startGamePrompt
      },
    ],
  });

  const { storyTitle, story } = parseGPTJson<IStoryStartCreateResponse>(startGameResponse.choices[0]?.message?.content || '{}') || { storyTitle: '', story: '' };
  console.log('STORY START RESPONSE:', storyTitle, story);

  // save the story in the database
  const {data: storyData, error: storyError} = await supabase
    .from(EDBTables.Stories)
    .insert({
      id: storyID,
      title: storyTitle,
      description: settingPrompt,
      style: setting.style,
      tone: setting.tone,
      dmStyle: setting.dmStyle,
    })
    .select();
  if(storyError) {
    return res.status(500).json({ error: storyError.message });
  }
  console.log('STORY SAVED:', storyData);

  // save story step in the database
  const {data: storyStepData, error: storyStepError} = await supabase
    .from(EDBTables.StorySteps)
    .insert({
      story_id: storyID,
      text: story,
    })
    .select();
  if(storyStepError) {
    return res.status(500).json({ error: storyStepError.message });
  }
  console.log('STORY STEP SAVED:', storyStepData);

  const heroesWithStoryId: IHeroWithStoryId[] = heroesList.map((hero) => ({
    ...hero,
    story_id: storyID,
  }));

  console.log('heroesWithStoryId',heroesWithStoryId)

  // save heroes in the database
  const {data: heroesData, error: heroesError} = await supabase
    .from(EDBTables.Heroes)
    .insert(heroesWithStoryId)
    .select('*');
  if(heroesError) {
    return res.status(500).json({ error: heroesError.message });
  }
  console.log('HEROES SAVED:', heroesData);

  res.json({ 
    status: 'OK', 
    message: 'Game started successfully',
    data: story,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// get story by id endpoint
router.get('/stories/:storyID', async (req, res) => {
  const { storyID } = req.params;
  const { data, error } = await supabase
    .from(EDBTables.Stories)
    .select('id, title, description, style, tone, dmStyle, heroes (*), story_steps (*)')
    .eq('id', storyID);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json({
    data: data[0],
    code: 200,
    status: 'success'
  });
});

// get stories list endpoint
router.get('/stories', async (req, res) => {
  const { data, error } = await supabase
    .from(EDBTables.Stories)
    .select('id, title, description, style, heroes (*)');

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json({
    data,
    code: 200,
    status: 'success'
  });
});

// delete story endpoint
router.delete('/stories/:storyID', async (req, res) => {
  const { storyID } = req.params;
  const { data, error } = await supabase
    .from(EDBTables.Stories)
    .delete()
    .eq('id', storyID);

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  res.json({
    data,
    code: 200,
    status: 'success'
  });
});

export { router as openaiRouter };
