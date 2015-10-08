'use strict'

var Noun = function() {
  this.animals = true;
  this.people = true;
  this.places = true;
  this.legions = true;
  this.things = true;
  this.socks = true;
  this.eyes = true;
  this.worlds = true;
  this.mountains = true;
  this.clocks = true;
};

function getRandomNoun(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
};

function postNoun(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: "We already have " + word + " in our list."};
  }
  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: "Thanks for submitting the word " + word + "!"};
};

module.exports.noun = Noun;
module.exports.getRandomNoun = getRandomNoun;
module.exports.postNoun = postNoun;
