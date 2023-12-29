// import express and create http server
const express = require('express');
const { createServer } = require('node:http');
// import path module
const { join } = require('node:path');

// port number on which server will run
const PORT = 3000;

// create express app
const app = express();

// create http server using express app
const server = createServer(app);

// serve static files from the public directory
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// start server on port 3000
server.listen(PORT, () => {
  console.log('Server Up and Running at http://localhost:3000');
});