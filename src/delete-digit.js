const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = [];
  const arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    let digit = '';
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        digit += arr[j];
      }
    }
    res.push(+digit);
  }

  return Math.max(...res);
}

module.exports = {
  deleteDigit,
};
