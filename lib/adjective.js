'use strict'

var Adjective = function() {
  this.alluring = true;
  this.belligerent = true;
  this.combative = true;
  this.dynamic = true;
  this.exotic = true;
  this.fabulous = true;
  this.groovy = true;
  this.hysterical = true;
  this.invincible = true;
  this.jittery = true;
};

function getRandomAdj(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
};

function postAdj(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: "We already have " + word + " in our list."};
  }
  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: "Thanks for submitting the word " + word + "!"};
};

module.exports.adjective = Adjective;
module.exports.getRandomAdj = getRandomAdj;
module.exports.postAdj = postAdj;
