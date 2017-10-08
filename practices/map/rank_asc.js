'use strict';
var rank_asc = function (collection) {
  let a = collection.sort();
  a = a.reverse();
  return a;
};

module.exports = rank_asc;
