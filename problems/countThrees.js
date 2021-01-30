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

function countThrees(n) {
    let counts = {}
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts
}


module.exports = countThrees;
