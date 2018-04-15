var express = require('express'),
  bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'jane' },
  { id: 3, name: 'roy' }
]

app.get('/listUsers', function (req, res) {
  res.end(JSON.stringify(users));
});

app.put('/edituser', function (req, res) {
  res.end('http put')
});

app.post('/adduser', function (req, res) {
  users.push(req.body);
  res.end(JSON.stringify(users));
});

app.delete('/deleteusers', function (req, res) {
  res.end('http delete')
})

var server = app.listen(8081, function () {
  console.log("listening..");
})