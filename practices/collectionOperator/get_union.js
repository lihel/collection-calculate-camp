'use strict';

function get_union(collection_a, collection_b) {
  collection_b.map((n)=> {
    if (collection_a.indexOf(n) == -1) {
      collection_a.push(n);
    }
  })
  return collection_a;
}

module.exports = get_union;

