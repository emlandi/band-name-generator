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

module.exports.verb = Verb;
module.exports.getRandomVerb = getRandomVerb;
