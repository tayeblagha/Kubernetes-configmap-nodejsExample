const express = require('express');
const ejs = require('ejs');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route that renders an EJS template
app.get('/', function(req, res) {
  const data = {
    title: 'Hello World',
    background_color: process.env.BACKGROUND_COLOR || '#ffffff'
  };
  res.render('index', data);
});

// Start the server
app.listen(8080, function() {
  console.log('Server started on port 8080');
});
