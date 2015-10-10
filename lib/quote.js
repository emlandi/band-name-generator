//Extra Feature
'use strict';

function getRandomQuote() {
  var quotes = [
    'You can do it!',
    'Never give up.',
    'Believe in yourself.',
    'Reach for the stars!',
  ];

  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return {msg: randomQuote};
}

module.exports = getRandomQuote;
