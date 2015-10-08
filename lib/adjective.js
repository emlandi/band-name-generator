'use strict'

var Adjective = function() {
  this.tall = true;
  this.dark = true;
  this.handsome = true;
  this.exotic = true;
  this.cool = true;
  this.eerie = true;
};

function getRandomAdj(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
};

function postWord(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: "We already have " + word + " in our list."};
  }
  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: "Thanks for submitting the word " + word + "!"};
};

module.exports.adjective = Adjective;
module.exports.getRandomAdj = getRandomAdj;
module.exports.postWord = postWord;
