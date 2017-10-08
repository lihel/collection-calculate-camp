'use strict';

function collect_same_elements(collection_a, object_b) {
  let c = [];
  collection_a.filter((n)=> {
    object_b.value.map((b)=> {
      if (b === n.key) {
        c.push(n.key);
      }
    })
  });
  return c;
}

module.exports = collect_same_elements;
