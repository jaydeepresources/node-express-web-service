var express = require('express'),
  bodyParser = require('body-parser');

var app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

var users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'jane' },
  { id: 3, name: 'roy' }
]

app.get('/listUsers', function (req, res) {
  res.end(JSON.stringify(users));
});

app.put('/editUser', function (req, res) {
  res.end('http put')
});

app.post('/addUser', function (req, res) {
  users.push(req.body);
  res.end(JSON.stringify(users));
});

app.delete('/deleteUser/:id', function (req, res) {  
  users.splice(req.params.id,1);
  res.end(JSON.stringify(users));
})

var server = app.listen(8081, function () {
  console.log("listening..");
})