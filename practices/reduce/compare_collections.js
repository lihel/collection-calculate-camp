'use strict';

function compare_collections(collection_a, collection_b) {
  let f = false;
  if (collection_a.length == collection_b.length) {
    if (collection_a.toString() == collection_b.toString()) {
      f = true;
    }
  }
  return f;
}

module.exports = compare_collections;


