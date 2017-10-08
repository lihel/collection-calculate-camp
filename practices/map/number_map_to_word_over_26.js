'use strict';
var number_map_to_word_over_26 = function (collection) {
  let a = [];
  collection.map((n)=> {
    let f = 'a';
    let numY = n % 26;
    let numB = Math.floor(n / 26);
    if (numB == 0 && numY != 0) {
      a.push(String.fromCharCode(f.charCodeAt(0) + numY - 1));
    }
    else {
      let str = '';
      str += String.fromCharCode(f.charCodeAt(0) + numB - 1);
      str += String.fromCharCode(f.charCodeAt(0) + numY - 1);
      a.push(str);
    }
  });
  return a;
};

module.exports = number_map_to_word_over_26;
