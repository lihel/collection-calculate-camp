'use strict';

function choose_even(collection) {
  let b = [];
  collection.filter((n)=> {
    if (n % 2 == 0) {
      b.push(n);
    }
  });
  return b;
}

module.exports = choose_even;
