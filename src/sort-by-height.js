const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = arr
    .reduce((acc, val, i) => {
      if (val == -1) acc.push(i);
      return acc;
    }, [])
    .reverse();

  indexes.forEach((el) => {
    arr.splice(el, 1);
  });

  arr.sort((a, b) => a - b);
  let res = [];
  let arrInd = 0;
  for (let i = 0; i < arr.length + indexes.length; i++) {
    if (indexes.findIndex((el) => el == i) >= 0) {
      res.push(-1);
    } else {
      res.push(arr[arrInd]);
      arrInd++;
    }
  }
  return res;
}

module.exports = {
  sortByHeight,
};
