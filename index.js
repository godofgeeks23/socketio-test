// import express and create http server
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

// create express app
const app = express();
// create http server using express app
const server = createServer(app);

// serve static files from the public directory
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// start server on port 3000
server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});