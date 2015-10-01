var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));

app.listen(port, function() {
  console.log("server started on port " + port);
});

app.get("/", function (req, res) {
  // res.send("hello universe!");
  res.sendFile(index.html);
});

var Adjective = function() {
  this.tall = true;
  this.thirsty = true;
  this.happy = true;
}

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


