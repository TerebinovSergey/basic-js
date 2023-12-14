const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength: function () {
    return this.arr.length;
  },
  addLink: function (value) {
    this.arr.push(value == undefined ? 'null' : value);
    return this;
  },
  removeLink: function (position) {
    let pos = position - 1;
    if (!Number.isInteger(pos) || pos < 0 || pos >= this.arr.length) {
      this.arr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(pos, 1);
    return this;
  },
  reverseChain: function () {
    this.arr.reverse();
    return this;
  },
  finishChain: function () {
    let result = '';
    this.arr.forEach((element) => {
      result +=
        result == ''
          ? `( ${element.toString()} )`
          : `~~( ${element.toString()} )`;
    });
    this.arr.length = 0;
    return result;
  },
};

module.exports = {
  chainMaker,
};
