'use strict';

function compute_median(collection) {
  let f = Math.floor(collection.length / 2);

  collection = collection.sort((a, b)=> {
    return a - b;
  });
  if (collection.length % 2 != 0) {
    return collection[f]
  }
  else {
    let p = (parseFloat(collection[f]) + parseFloat(collection[f - 1])) / 2;
    return p;
  }

}

module.exports = compute_median;


