'use strict';

function get_intersection(collection_a, collection_b) {
  let b = [];
  collection_b.map((n)=> {
    for (let i of collection_a) {
      if (i == n) {
        b.push(n);
      }
    }
  });
  return b;
}

module.exports = get_intersection;
