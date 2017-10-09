'use strict';

function amount_even(collection) {
  let sum = 0;
  collection.map((n)=> {
    if (n % 2 == 0) {
      sum += n;
    }
  });
  return sum;
}

module.exports = amount_even;
