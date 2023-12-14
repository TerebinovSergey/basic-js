const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let sum = 0;
  let res = [];
  for (let y = 0; y < matrix.length; y++) {
    res.push([]);
    for (let x = 0; x < matrix[y].length; x++) {
      matrix[y][x];
      res[y].push(countMines(x, y, matrix));
    }
  }
  return res;
}

function countMines(x, y, matrix) {
  let count = 0;
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (
        i < 0 ||
        j < 0 ||
        i >= matrix.length ||
        j >= matrix[i].length ||
        (i == y && j == x)
      )
        continue;
      if (matrix[i][j]) count++;
    }
  }
  return count;
}

module.exports = {
  minesweeper,
};
