const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];
  let curInd;
  for (let i = 0; i < arr.length; i++) {
    curInd = newArr.length;
    elem = arr[i];
    if (elem == '--discard-next') {
      i++;
    } else if (elem == '--discard-prev' && i < arr.length - 1) {
      if (arr[i - 2] !== '--discard-next') {
        newArr.pop();
      }
    } else if (elem == '--double-next' && i < arr.length - 1) {
      let el = arr[i + 1];
      if (Number.isInteger(el)) {
        newArr.push(el);
        newArr.push(el);
        i++;
      }
    } else if (elem == '--double-prev' && i > 0) {
      let el = arr[i - 1];
      if (Number.isInteger(el)) {
        if (arr[i - 2] == '--discard-next') {
          continue;
        }
        newArr.push(el);
        if (arr[i - 2] !== '--double-next') {
          newArr.push(el);
          i++;
        }
      }
    } else {
      if (
        typeof elem == 'string' &&
        (elem == '--discard-prev' ||
          elem == '--discard-next' ||
          elem == '--double-prev' ||
          elem == '--double-next')
      ) {
        continue;
      }
      newArr.push(elem);
    }
  }

  return newArr;
}

module.exports = {
  transform,
};
