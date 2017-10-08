'use strict';

function collect_min_number(collection) {
  let min = collection[0];
  collection.map((n)=> {
    if (n < min)
      min = n;
  });
  return min;
}

module.exports = collect_min_number;

