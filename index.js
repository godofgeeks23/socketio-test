const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

// port number on which server will run
const PORT = 3000;

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

server.listen(PORT, () => {
  console.log('Server Up and Running at http://localhost:' + PORT);
});
