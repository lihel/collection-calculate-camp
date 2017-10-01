'use strict';

function choose_multiples_of_three(collection) {
  let b = [];
  collection.filter((n)=> {
    if (n % 3 == 0) {
      b.push(n);
    }
  });
  return b;
}

module.exports = choose_multiples_of_three;
