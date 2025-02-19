import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// CORS configuration to allow both localhost:3000 and localhost:5173
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Create an OpenAI instance using the API key from the .env file
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Middleware for CORS and JSON parsing
app.use(cors(corsOptions));  // Apply CORS middleware
app.use(express.json()); // Middleware to parse incoming JSON requests

// POST route for chat functionality
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    // Check if messages are passed correctly
    if (!messages || !Array.isArray(messages)) {
      throw new Error('Invalid messages format');
    }

    // Format the messages for OpenAI API
    const formattedMessages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      ...messages.map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
      })),
    ];

    // Send a request to OpenAI API for a chat completion
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: formattedMessages,
    });

    // Send the OpenAI response back to the frontend
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    // Log the full error message and stack
    console.error('Error in /api/chat:', error);

    // Send error details in the response for debugging
    res.status(500).json({
      error: 'Something went wrong, please try again.',
      details: error.message,
    });
  }
});

// Start the server on a specified port (default to 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});