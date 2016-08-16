var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'public/index.html');
});

app.listen(process.env.PORT || 8080, function () {
  console.log('File metadata app listening on port 8080!');
});