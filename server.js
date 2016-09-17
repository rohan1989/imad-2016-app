var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/enfield.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'enfield.jpg'));
});


var port = 8083; // Use 8080 for local development because you might already have apache running on 80
app.listen(8083, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
