import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// CORS configuration to allow both localhost:3000 and localhost:5173
const allowedOrigins = ['https://json-file-asil.onrender.com', 'https://federation-royale.netlify.app'];

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
const openai = new OpenAI({ apiKey: "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" });

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
      { 
        role: 'system', 
        content: "your name is NOIGA and You are an advanced real-time AI assistant for soccer, developed by FRDISI (https://www.frdisi.ma/fr). You provide insights based on real-time data collected from players, their positions on the pitch, and match events. Your goal is to support soccer analysis, injury prediction, and coaching strategies. This AI system is developed by Abdelhaq Elmetlini and Hicham Madromi."
      },
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
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});