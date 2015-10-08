var express = require("express");
var app = express();

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

var Adjective = require("./lib/adjective.js");
var Verb = require("./lib/verb.js");
var Noun = require("./lib/noun.js");
var getRandomWord = require("./lib/getRandomWord.js");
var postWord = require("./lib/postWord.js");

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));

app.listen(port, function() {
  console.log("server started on port " + port);
});

app.get("/", function (req, res) {
  res.sendFile(index.html);
});

//Adjectives
var adjective = new Adjective();

app.get("/adjective", function (req, res) {
  res.json(getRandomWord(adjective));
});

app.post("/adjective", function (req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

//Verbs
var verb = new Verb();

app.get("/verb", function (req, res) {
  res.json(getRandomWord(verb));
});

app.post("/verb", function (req, res) {
  var word = postWord(req.body.word, verb);
  res.json(word);
});

//Nouns
var noun = new Noun();

app.get("/noun", function (req, res) {
  res.json(getRandomWord(noun));
});

app.post("/noun", function (req, res) {
  var word = postWord(req.body.word, noun);
  res.json(word);
});
