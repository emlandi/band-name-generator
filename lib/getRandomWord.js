'use strict';

function getRandomWord(object) {
  var array = Object.keys(object);
  var randomProp = array[Math.floor(Math.random() * array.length)];
  return {word: randomProp};
}

module.exports = getRandomWord;
