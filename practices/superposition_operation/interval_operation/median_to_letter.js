'use strict';

function median_to_letter(collection) {
  let mid;
  let f = 'a';
  let p = Math.floor(collection.length / 2);
  if (collection.length % 2 != 0) {
    mid = collection[f];
  }
  else {
    mid = (parseFloat(collection[p]) + parseFloat(collection[p - 1])) / 2;
  }
  let numY = mid % 26;
  let numB = Math.floor(mid / 26);
  if (numB == 0) {
    return String.fromCharCode(f.charCodeAt(0) + numY - 1);
  }
  else if (numY == 0 && numB != 0) {
    if (numB == 1) {
      return String.fromCharCode(f.charCodeAt(0) + 25);
    }
    else {
      let str = '';
      str += String.fromCharCode(f.charCodeAt(0) + numB - 2);
      str += String.fromCharCode(f.charCodeAt(0) + 25);
      return str;
    }
  }
  else {
    let str = '';
    str += String.fromCharCode(f.charCodeAt(0) + numB - 1);
    str += String.fromCharCode(f.charCodeAt(0) + numY);
    return str;
  }

}

module.exports = median_to_letter;
