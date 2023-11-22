// Create Web Server with Node.js and Express.js
// Run: node comments.js

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/comments', function(req, res){
  res.send('Comments');
});

app.listen(8080);
console.log('Server is running...');