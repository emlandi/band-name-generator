var express = require("express");
var app = express();
var bodyparser = require("body-parser");

var Adjective = require("./lib/adjective.js").adjective;
var getRandomAdj = require("./lib/adjective.js").getRandomAdj;
// var postWord = require("./lib/adjective.js").postWord;
var Verb = require("./lib/verb.js").verb;
var getRandomVerb = require("./lib/verb.js").getRandomVerb;
var Noun = require("./lib/noun.js").noun;
var getRandomNoun = require("./lib/noun.js").getRandomNoun;

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
  res.json(getRandomAdj(adjective));
});

// app.post("/adjective", function (req, res) {
//   var word = postWord(req.body.word, adjective);
//   res.json(word);
// });

//Verbs
var verb = new Verb();

app.get("/verb", function (req, res) {
  res.json(getRandomVerb(verb));
});

//Nouns
var noun = new Noun();

app.get("/noun", function (req, res) {
  res.json(getRandomNoun(noun));
});
