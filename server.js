var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));

app.listen(port, function() {
  console.log("server started on port " + port);
});

app.get("/", function (req, res) {
  res.sendFile(index.html);
});

//Adjectives
var Adjective = function() {
  this.tall = true;
  this.dark = true;
  this.handsome = true;
}

var adjective = new Adjective();

function getRandomAdj(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
}

getRandomAdj(adjective);

app.get("/adjective", function (req, res) {
  res.json(getRandomAdj(adjective));
});

//Verbs
var Verb = function() {
  this.eat = true;
  this.drink = true;
  this.sleep = true;
}

var verb = new Verb();

function getRandomVerb(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
}

getRandomVerb(verb);

app.get("/verb", function (req, res) {
  res.json(getRandomVerb(verb));
});

//Nouns
var Noun = function() {
  this.people = true;
  this.places = true;
  this.things = true;
}

var noun = new Noun();

function getRandomNoun(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
}

getRandomNoun(noun);

app.get("/noun", function (req, res) {
  res.json(getRandomNoun(noun));
});
