var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: './uploads/' })

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'public/index.html');
});

app.post('/file-size', upload.single('userfile'), function (req, res) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  var size = req.file.size;
  console.log(req.file.size);
  
  res.end('Your file is '+ size +' bytes');
})

app.listen(process.env.PORT || 8080, function () {
  console.log('File metadata app listening on port 8080!');
});