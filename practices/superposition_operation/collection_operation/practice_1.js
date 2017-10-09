'use strict';

function hybrid_operation(collection) {
  let sum = 0;
  collection.map((n)=> {
    n = n * 3 + 2;
    sum += n;
  });
  return sum;

}

module.exports = hybrid_operation;

