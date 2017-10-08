'use strict';

function spilt_to_zero(number, interval) {
  let a = [];
  while (number > 0) {
    a.push(number);
    number -= interval;
    number = parseFloat(number.toFixed(2));
  }
  a.push(number);
  return a;
}

module.exports = spilt_to_zero;
