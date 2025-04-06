// server.js

const express = require('express');
const app = express();

// Import DB connection logic from db.js
// require('./db');

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
