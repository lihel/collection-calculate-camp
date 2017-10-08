'use strict';

function double_to_one(collection) {
  let b = [];
  for (let i = 0; i < collection.length; i++) {
    collection[i].map((item)=> {
      if (b.indexOf(item) == -1) {
        b = b.concat(item);
      }
    });
  }
  return b;
}

module.exports = double_to_one;
