'use strict';

function collect_all_even(collection) {
  let b = [];
  collection.map((n)=> {
    if (n % 2 == 0) {
      b.push(n);
    }
  });
  return b;
}

module.exports = collect_all_even;
