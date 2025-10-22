import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { openaiRouter } from './routes/openai';


const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/openai', openaiRouter);

// Game start endpoint
app.post('/api/game/start', (req, res) => {
  console.log('Game start request received:', req.body);
  res.json({ 
    status: 'OK', 
    message: 'Game started successfully',
    data: req.body,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 CORS enabled for: ${corsOptions.origin}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
