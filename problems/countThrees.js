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

function countThrees(number) {
  let counter = 0;
  let num = number.toString();
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "3") {
      counter += 1;
    }
  }
  return counter;
}
//correct
module.exports = countThrees;
