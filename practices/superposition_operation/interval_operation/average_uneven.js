'use strict';

function average_uneven(collection) {

  let sum = 0, count = 0;
  collection.map((n)=> {
    if (n % 2 != 0) {
      sum += n;
      count++;
    }
  });
  return sum / count;
}

module.exports = average_uneven;
