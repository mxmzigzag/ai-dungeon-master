import { parseStringWithParams } from "../utils/common";

const RANDOM_HEROES_PROMPT = `
  You are a Dungeons & Dragons 5e character creator. 
  Generate a party of {{partySize}} heroes that fit the following setting and story context:

  SETTING: {{settingTitle}}
  STORY INTRO: {{storyPrompt}}
  TONE: Adventurous, balanced, and immersive.

  For each hero, provide the following:
  1. **Name**  
  2. **Race** (and subrace if applicable)  
  3. **Class & Subclass**  
  4. **Gender / Pronouns**  
  5. **Personality Summary** (1–2 sentences)  
  6. **Background & Motivation** (3–5 sentences — why they adventure, where they come from)  
  7. **Appearance** (1–2 sentences — notable features, clothing, etc.)  
  8. **Signature Equipment / Item** (1–2 key items or weapons that represent them)  
  9. **Party Role** (what purpose they serve in the team — e.g., healer, scout, strategist, tank, etc.)

  Keep the party diverse in race, class, and background. 
  Make sure their stories intertwine slightly — they should feel like they belong in the same world and could naturally work together.

  Return the result as a structured JSON array:
  [
    {
      "name": "",
      "race": "",
      "class": "",
      "subclass": "",
      "gender": "",
      "personality": "",
      "background": "",
      "appearance": "",
      "equipment": "",
      "role": ""
    }
  ]
`

const getRandomHeroesPrompt = (partySize: number, settingTitle: string, storyPrompt: string) => {
  return parseStringWithParams(RANDOM_HEROES_PROMPT, { partySize: partySize.toString(), settingTitle, storyPrompt });
}

export { getRandomHeroesPrompt };