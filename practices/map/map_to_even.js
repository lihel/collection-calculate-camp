'use strict';
function map_to_even(collection) {
  let a = collection.map((n) => {
    return n * 2;
  });
  return a;
}
module.exports = map_to_even;
