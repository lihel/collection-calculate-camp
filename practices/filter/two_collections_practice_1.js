'use strict';

function choose_common_elements(collection_a, collection_b) {
  let c = [];
  collection_a.filter((n)=> {
    collection_b.map((b)=> {
      if (b === n) {
        c.push(n);
      }
    })
  });
  return c;
}

module.exports = choose_common_elements;
