import express from 'express';
import OpenAI from 'openai';
import axios from 'axios';

const router = express.Router();

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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

// Test endpoint with external API call using axios
router.get('/test-external', async (req, res) => {
  try {
    // Example external API call using axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.json({
      success: true,
      message: 'External API call successful',
      data: response.data
    });

  } catch (error: any) {
    console.error('External API Error:', error);
    res.status(500).json({ 
      error: 'External API call failed',
      message: error.message || 'Unknown error occurred'
    });
  }
});

// Health check for OpenAI service
router.get('/health', async (req, res) => {
  try {
    // Simple test to verify OpenAI API key is working
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello" }],
      max_tokens: 5,
    });

    res.json({
      success: true,
      message: 'OpenAI service is healthy',
      model: completion.model
    });

  } catch (error: any) {
    res.status(503).json({
      success: false,
      error: 'OpenAI service is not available',
      message: error.message
    });
  }
});

export { router as openaiRouter };
