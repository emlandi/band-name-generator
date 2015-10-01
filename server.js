var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

var Adjective = function() {
  this.tall = true;
  this.thirsty = true;
  this.happy = true;
}

app.listen(port, function() {
  console.log("server started on port " + port);
  console.log(getRandomWord(adjective));
});

app.get("/", function (req, res) {
  res.send("hello universe!");
});


var adjective = new Adjective();

function getRandomWord(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
}

getRandomWord(adjective);


app.get("/adjective", function (req, res) {
  res.json(getRandomWord(adjective));
});


