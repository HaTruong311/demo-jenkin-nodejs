/**
 * Main application entry point
 * Sets up Express server with routes
 */

const express = require('express');
const helloController = require('./controllers/helloController');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Define routes
app.get('/hello', helloController.getHello);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the API. Try /hello endpoint.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export for testing
