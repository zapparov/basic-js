const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCounts1 = {};
  const charCounts2 = {};
  let commonCount = 0;

  for (const char of s1) {
    charCounts1[char] = (charCounts1[char] || 0) + 1;
  }

  for (const char of s2) {
    charCounts2[char] = (charCounts2[char] || 0) + 1;
  }

  for (const char in charCounts1) {
    if (charCounts2.hasOwnProperty(char)) {
      commonCount += Math.min(charCounts1[char], charCounts2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
