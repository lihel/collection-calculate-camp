'use strict';

function hybrid_operation_to_uneven(collection) {

  let sum = 0;
  collection.map((n)=> {
    if (n % 2 != 0) {
      n = n * 3 + 5;
      sum += n;
    }
  });
  return sum;
}

module.exports = hybrid_operation_to_uneven;

