'use strict';

function average_to_letter(collection) {
  let sum = 0;
  collection.map((n)=> {
    sum += n;
  });
  let average = Math.ceil(sum / collection.length);
  return String.fromCharCode('a'.charCodeAt(0) + average - 1);
}

module.exports = average_to_letter;

