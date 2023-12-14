const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dom = domains.reduce((acc, elem) => {
    acc.push('.' + elem.split('.').reverse().join('.'));
    return acc;
  }, []);

  let domainsSet = new Set();
  dom.forEach((el) => {
    let lastInd = 0;
    while (true) {
      lastInd = el.indexOf('.', lastInd + 1);
      if (lastInd < 0) {
        domainsSet.add(el.slice(0));
        break;
      }
      domainsSet.add(el.slice(0, lastInd));
    }
  });

  let obj = {};
  for (let item of domainsSet) {
    let count = dom.reduce((acc, val) => {
      if (val.includes(item)) acc++;
      return acc;
    }, 0);
    obj[item] = count;
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
