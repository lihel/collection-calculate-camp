'use strict';
function count_same_elements(collection) {
  var newarr = [];
  var k = 0;
  for (let j = 1; j < 9; j++)
    newarr[j] = {};
  var object = new Object();
  newarr[0] = object;
  newarr[0].key = collection[0];
  newarr[0].count = 0;

  collection.map((n)=> {
    if (n === newarr[k].key) {
      newarr[k].count++;
    }
    else {
      k++;
      newarr[k].key = n;
      newarr[k].count = 1;
    }
  });

  return newarr;
}

module.exports = count_same_elements;
