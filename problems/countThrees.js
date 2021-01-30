/**
 * Counts the number of threes in a given number.
 * @param {number} n - The input number.
 * @returns {number} - Returns how many threes are in the input.
 *
 * ex: countThrees(300)
 * returns: 1
 *
 * ex: countThrees(3203)
 * returns: 2
 *
 * ex: countThrees(47)
 * returns: 0
 */

const countThrees = (n) => {
  let output = 0;
  let newString = n.toString();
  for (let i = 0; i < newString.length; i++) {
    if (newString[i].includes("3")) {
      output += 1;
    }
  }
  return output;
};

module.exports = countThrees;
