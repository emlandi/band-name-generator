'use strict'

var Verb = function() {
  this.eat = true;
  this.drink = true;
  this.sleep = true;
  this.feel = true;
  this.find = true;
  this.dance = true;
  this.say = true;
  this.travel = true;
  this.know = true;
  this.fly = true;
};

function getRandomVerb(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
};

function postVerb(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: "We already have " + word + " in our list."};
  }
  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: "Thanks for submitting the word " + word + "!"};
};

module.exports.verb = Verb;
module.exports.getRandomVerb = getRandomVerb;
module.exports.postVerb = postVerb;
