import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// start game endpoint
router.post('/game/start', (req, res) => {
  console.log('Game start request received:', req.body);

  res.json({ 
    status: 'OK', 
    message: 'Game started successfully',
    data: req.body,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Dummy request endpoint
router.post('/dummy-request', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Make a dummy request to OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant for a dungeon master game. Keep responses concise and engaging."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'No response generated';

    res.json({
      success: true,
      response,
      usage: completion.usage,
      model: completion.model
    });

  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    
    // Handle specific OpenAI errors
    if (error.code === 'insufficient_quota') {
      return res.status(402).json({ 
        error: 'OpenAI API quota exceeded',
        message: 'Please check your OpenAI API key and billing'
      });
    }
    
    if (error.code === 'invalid_api_key') {
      return res.status(401).json({ 
        error: 'Invalid OpenAI API key',
        message: 'Please check your OPENAI_API_KEY environment variable'
      });
    }

    res.status(500).json({ 
      error: 'Failed to process request',
      message: error.message || 'Unknown error occurred'
    });
  }
});

export { router as openaiRouter };
