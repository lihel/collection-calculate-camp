'use strict';

function compute_chain_median(collection) {
  let arr = collection.split('->');

  arr.sort((a, b)=> {
    return a - b;
  });
  let p = (parseFloat(arr[Math.floor(arr.length / 2)]) + parseFloat(arr[Math.floor(arr.length / 2) - 1])) / 2;
  return p;
}

module.exports = compute_chain_median;
