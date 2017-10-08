'use strict';

function double_to_one(collection) {
  let b = [];
  for (let n of collection) {
    b = b.concat(n);
  }
  return b;
}

module.exports = double_to_one;
