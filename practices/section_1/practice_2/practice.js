'use strict';

function collect_same_elements(collection_a, collection_b) {
  let c = [];
  collection_a.filter((n)=> {
    collection_b[0].map((b)=> {
      if (b === n) {
        c.push(n);
      }
    })
  });
  return c;
}

module.exports = collect_same_elements;
