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

module.exports.noun = Noun;
module.exports.getRandomNoun = getRandomNoun;
