'use strict';
var number_map_to_word = function (collection) {
  let a = [];
  collection.map((n)=> {
    let num = n % 26;
    a.push(String.fromCharCode('a'.charCodeAt(0) + num - 1));
  });
  return a;
};

module.exports = number_map_to_word;
