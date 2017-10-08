'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  let c = [];
  collection_a.filter((n)=> {
    collection_b.map((b)=> {
      if (n % b == 0) {
        c.push(n);
      }
    })
  });
  return c;
}

module.exports = choose_divisible_integer;
