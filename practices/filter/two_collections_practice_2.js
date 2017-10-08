'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let c = [];
  collection_a.filter((n)=> {
    if (collection_b.indexOf(n) == -1) {
      c.push(n);
    }
  });
  return c;
}

module.exports = choose_no_common_elements;
