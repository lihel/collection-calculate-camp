'use strict';

function get_letter_interval_2(number_a, number_b) {
  let a = [];
  let f = 'a';
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      let numY = i % 26;
      let numB = Math.floor(i / 26);
      if (numB == 0) {
        a.push(String.fromCharCode(f.charCodeAt(0) + numY - 1));
      }
      else if (numY == 0 && numB != 0) {
        if (numB == 1) {
          a.push(String.fromCharCode(f.charCodeAt(0) + 25));
        }
        else {
          let str = '';
          str += String.fromCharCode(f.charCodeAt(0) + numB - 2);
          str += String.fromCharCode(f.charCodeAt(0) + 25);
          a.push(str);
        }
      }
      else {
        let str = '';

        str += String.fromCharCode(f.charCodeAt(0) + numB - 1);
        str += String.fromCharCode(f.charCodeAt(0) + numY - 1);
        a.push(str);
      }
    }
  }
  else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      let numY = i % 26;
      let numB = Math.floor(i / 26);
      if (numB == 0) {
        a.push(String.fromCharCode(f.charCodeAt(0) + numY - 1));
      }
      else if (numY == 0 && numB != 0) {
        if (numB == 1) {
          a.push(String.fromCharCode(f.charCodeAt(0) + 25));
        }
        else {
          let str = '';
          str += String.fromCharCode(f.charCodeAt(0) + numB - 2);
          str += String.fromCharCode(f.charCodeAt(0) + 25);
          a.push(str);
        }
      }
      else {
        let str = '';
        str += String.fromCharCode(f.charCodeAt(0) + numB - 1);
        str += String.fromCharCode(f.charCodeAt(0) + numY - 1);
        a.push(str);
      }
    }
  }
  else {
    let str = '';
    let numY = number_a % 26;
    let numB = Math.floor(number_a / 26);
    str += String.fromCharCode(f.charCodeAt(0) + numB - 1);
    str += String.fromCharCode(f.charCodeAt(0) + numY - 1);
    a.push(str);
  }
  return a;
}

module.exports = get_letter_interval_2;
