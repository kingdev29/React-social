var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();

var socket = require('./app/socket.js');
var db;

app.use(express.static('public'));

app.get('/woo', function(req, res) {
  res.send('Get request to woo page');
});

app.get('/api/bugs', function(req, res) {
  db.collection("bugs").find().toArray(function(err, docs) {
    res.json(docs);
  });
});

app.use(bodyParser.json());
app.post('/api/bugs', function(req, res) {
  console.log("Req body:", req.body);
  var newBug = req.body;
  db.collection("bugs").insertOne(newBug, function(err, result) {
    var newId = result.insertedId;
    db.collection("bugs").find({_id: newId}).next(function(err, doc) {
      res.json(doc);
    });
  });
});

MongoClient.connect('mongodb://localhost/bugsdb', function(err, dbConnection) {
  db = dbConnection;
  var server = app.listen(3000, function() {
    var port = server.address().port;
    // Socket.io Communication
    var io = require('socket.io').listen(server);
    io.sockets.on('connection', socket);
    console.log("Started server at port", port);
  });
});


