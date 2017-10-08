'use strict';

function collect_max_number(collection) {
  let max = collection[0];
  collection.map((n)=> {
    if (n > max)
      max = n;
  });
  return max;
}

module.exports = collect_max_number;
