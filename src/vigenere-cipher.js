const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }

  encrypt(plaintext, key) {
    if (typeof plaintext == 'undefined' || typeof key == 'undefined')
      throw new Error('Incorrect arguments!');
    plaintext = plaintext.toUpperCase();
    key = key.toUpperCase();
    key = getCurrentKey(key, plaintext.length);
    let encryptText = '';
    let i = 0,
      indKey = 0;
    while (encryptText.length < plaintext.length) {
      let simbol = plaintext[i];
      if (simbol.match(/[A-Z]/)) {
        encryptText += encryptSimbol(plaintext[i], key[indKey]);
        indKey++;
      } else {
        encryptText += simbol;
      }
      i++;
    }

    if (this.directMachine) {
      return encryptText;
    }

    return encryptText.split('').reverse().join('');
  }

  decrypt(ciphertext, key) {
    if (typeof ciphertext == 'undefined' || typeof key == 'undefined')
      throw new Error('Incorrect arguments!');
    ciphertext = ciphertext.toUpperCase();
    key = key.toUpperCase();
    key = getCurrentKey(key, ciphertext.length);
    let encryptText = '';
    let i = 0,
      indKey = 0;
    while (encryptText.length < ciphertext.length) {
      let simbol = ciphertext[i];
      if (simbol.match(/[A-Z]/)) {
        encryptText += decryptSimbol(ciphertext[i], key[indKey]);
        indKey++;
      } else {
        encryptText += simbol;
      }
      i++;
    }

    if (this.directMachine) {
      return encryptText;
    }

    return encryptText.split('').reverse().join('');
  }
}

function getCurrentKey(key, length) {
  let arrKeys = key.split('');
  for (let i = 0; true; i++) {
    if (key.length >= length) return key;
    key += arrKeys[i];
    if (i == arrKeys.length - 1) i = -1;
  }
}

function encryptSimbol(curSimbol, keySimbol) {
  let alphabet = getAlphabet();
  let keyInd = alphabet.findIndex((el) => el == keySimbol);
  let curInd = alphabet.findIndex((el) => el == curSimbol);
  let ind = curInd + keyInd;
  ind = ind > 25 ? ind - 26 : ind;
  let encryptSimbol = alphabet[ind];
  return encryptSimbol;
}

function decryptSimbol(decrSimbol, keySimbol) {
  let alphabet = getAlphabet();
  let keyInd = alphabet.findIndex((el) => el == keySimbol);
  let decrInd = alphabet.findIndex((el) => el == decrSimbol);
  let ind = decrInd - keyInd;
  ind = ind < 0 ? ind + 26 : ind;
  let decryptSimbol = alphabet[ind];
  return decryptSimbol;
}

function getAlphabet() {
  return (arr_EN = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]);
}

module.exports = {
  VigenereCipheringMachine,
};
