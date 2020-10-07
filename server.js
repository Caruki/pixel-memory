const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

app.use(express.static(__dirname + '/dist/pixel-memory'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/pixel-memory/index.html'));
});

server.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
