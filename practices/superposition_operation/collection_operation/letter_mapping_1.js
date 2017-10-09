'use strict';

function even_to_letter(collection) {
  let a = [];
  collection.map((n)=> {
    let num = n % 26;
    if (n % 2 == 0) {
      a.push(String.fromCharCode('a'.charCodeAt(0) + num - 1))
    }
  });
  return a;
}

module.exports = even_to_letter;
