const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Middleware to log each request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  console.log('Request Body:', req.body); // Log request body to verify contents
  next();
});

// Proxy endpoint to forward requests to Ollama server
app.post('/api/chat', async (req, res) => {
  try {
    const { data } = await axios.post('http://localhost:11434/api/chat', req.body, {
      responseType: 'stream',  // Enable streaming response
    });
    
    // Stream data to the client
    data.pipe(res);
  } catch (error) {
    console.error('Error communicating with Ollama:', error.message);
    res.status(500).json({ error: 'Error communicating with Ollama server' });
  }
});


// Start the proxy server on port 5000
app.listen(5000, () => {
  console.log('Proxy server running on http://localhost:5000');
});
