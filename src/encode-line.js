const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let result = '';
  let arr = str.split('');
  arr.push(null);
  let simPrev = arr[0];
  arr.forEach((el) => {
    if (simPrev !== el) {
      result += (count > 1 ? count : '') + simPrev;
      simPrev = el;
      count = 1;
    } else {
      count++;
    }
  });

  return result;
}

module.exports = {
  encodeLine,
};
