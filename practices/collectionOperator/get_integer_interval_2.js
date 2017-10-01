'use strict';

function get_integer_interval_2(number_a, number_b) {
  let b = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      if (i % 2 == 0) {
        b.push(i);
      }
    }
  }
  else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      if (i % 2 == 0) {
        b.push(i);
      }
    }
  }
  else if (number_a == number_b && (number_a % 2 == 0)) {
    b.push(number_a);
  }

  return b;

}

module.exports = get_integer_interval_2;
