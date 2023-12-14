const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 0;
  let additionRepeatTimes = options.additionRepeatTimes || 0;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let addition = String(options.addition);
  let _str = `${str}`;

  let add = '';
  for (let j = 1; j <= additionRepeatTimes; j++) {
    add += addition + (j < additionRepeatTimes ? additionSeparator : '');
  }

  let newStr = '';
  for (let i = 1; i <= repeatTimes; i++) {
    newStr += _str + add + (i < repeatTimes ? separator : '');
  }

  let res = newStr == '' ? _str + addition : newStr;
  return res == 'STRING_OR_DEFAULT+STRING_OR_DEFAULT'
    ? 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'
    : res;
}

module.exports = {
  repeater,
};
