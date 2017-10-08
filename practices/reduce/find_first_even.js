'use strict';

function find_first_even(collection) {
  return collection.find((n)=> {
    if (n % 2 == 0)
      return n;
  });
}

module.exports = find_first_even;

