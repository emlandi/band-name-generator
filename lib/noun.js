'use strict'

var Noun = function() {
  this.animals = true;
  this.people = true;
  this.places = true;
  this.legion = true;
  this.things = true;
  this.stuff = true;
  this.eye = true;
  this.world = true;
  this.year = true;
  this.day = true;
};

function getRandomNoun(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
    return {word: randomProp};
};

module.exports.noun = Noun;
module.exports.getRandomNoun = getRandomNoun;
