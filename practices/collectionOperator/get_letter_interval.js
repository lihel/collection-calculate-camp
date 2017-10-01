'use strict';

function get_letter_interval(number_a, number_b) {
  let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
  let b = [];
  if (number_a < number_b) {
    for (let i = number_a - 1; i < number_b; i++) {
      b.push(a[i]);
    }
  }
  else if (number_a > number_b) {
    for (let i = number_a - 1; i >= number_b-1; i--) {
      b.push(a[i]);
    }
  }
  else if(number_a == number_b)
  {
    b.push(a[number_a - 1]);
  }

  return b;
}

module.exports = get_letter_interval;
