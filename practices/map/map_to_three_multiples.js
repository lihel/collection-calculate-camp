'use strict';
var map_to_three_multiples = function (collection) {
  let a = collection.map((n) => {
    return n * 3;
  });
  return a;
};

module.exports = map_to_three_multiples;
