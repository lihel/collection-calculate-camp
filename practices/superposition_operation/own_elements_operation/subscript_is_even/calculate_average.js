'use strict';
var calculate_average = function (collection) {
  let sum = 0, count = 0;
  collection.map((n) => {
    if ((collection.indexOf(n) + 1) % 2 == 0) {
      sum += n;
      count++;
    }
  });
  return sum / count;
};
module.exports = calculate_average;
