'use strict';
var map_to_four_multiples_add_one = function (collection) {
  let a = collection.map((n) => {
    return n * 4 + 1;
  });
  return a;
};

module.exports = map_to_four_multiples_add_one;
