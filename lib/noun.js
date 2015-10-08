'use strict'

var Noun = function() {
  this.people = true;
  this.places = true;
  this.things = true;
  this.eye = true;
  this.world = true;
  this.year = true;
};

function getRandomNoun(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
};

module.exports.noun = Noun;
module.exports.getRandomNoun = getRandomNoun;
