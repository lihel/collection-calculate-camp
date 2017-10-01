'use strict';

function choose_no_repeat_number(collection) {
  let b = [];
  collection.filter((n)=> {
    if (b.indexOf(n) == -1) {
      b.push(n);
    }
  })
  return b;
}

module.exports = choose_no_repeat_number;
