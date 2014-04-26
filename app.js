var express = require('express');
var connect = require('connect');

var app = express();
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(connect.bodyParser());

var players = {};

app.get('/', function (req, res) {
  res.render('players', {"players": players});
});

app.post('/status', function (req, res) {
  // wtf
  var json;
  for (data in req.body) {
    json = JSON.parse(data);
    break;
  }
  if (json.status == 'online') {
    console.log("Player " + json.player + " is online.");
    players[json.player] = true;
  } else {
    console.log("Player " + json.player + " is offline.");
    delete players[json.player];
  }
  res.send('okay');  
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});