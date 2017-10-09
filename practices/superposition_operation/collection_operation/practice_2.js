'use strict';

function hybrid_operation_to_uneven(collection) {
  let a = [];
  collection.map((n)=> {
    if (n % 2 != 0) {
      n = n * 3 + 2;
      a.push(n);
    }
  });
  return a;
}

module.exports = hybrid_operation_to_uneven;

