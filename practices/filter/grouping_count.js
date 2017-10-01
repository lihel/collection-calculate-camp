'use strict';

function grouping_count(collection) {
  let count = 0, obj = {};
  let arr = [];
  collection.filter((n)=> {
    if (arr.indexOf(n) == -1) {
      arr.push(n);
    }

    arr.map((nRepeat)=> {
      for (let n of collection) {
        if (nRepeat == n)
          count++;
      }
      obj[nRepeat] = count;
      count = 0;
    })

  });
  return obj;
}

module.exports = grouping_count;
