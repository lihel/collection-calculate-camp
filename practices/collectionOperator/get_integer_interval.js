'use strict';

function get_integer_interval(number_a, number_b) {
  let b = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      b.push(i);
    }
  }
  else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      b.push(i);
    }
  }
  else if (number_a == number_b) {
    b.push(number_a);
  }

  return b;
}

module.exports = get_integer_interval;

