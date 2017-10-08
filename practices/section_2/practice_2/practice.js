'use strict';

function count_same_elements(collection) {
  var newarr = [], split_arr = [];
  var k = 0;
  for (var j = 0; j < 9; j++)
    newarr[j] = {};
  newarr[0].key = collection[0];
  newarr[0].count = 0;
  collection.map((n)=> {
    if (n.length == 1) {
      if (n === newarr[k].key) {
        newarr[k].count++;
      }
      else {
        k++;
        newarr[k].key = n;
        newarr[k].count = 1;
      }
    }
    else {
      k++;
      split_arr = n.split("");
      newarr[k].key = split_arr[0];
      newarr[k].count = Number(split_arr[2]);
    }
  });

  return newarr;
}

module.exports = count_same_elements;
