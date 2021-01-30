/** Sum all even numbers in an array
 *
 * @param {number[]} arr - The input array
 * @returns {number} - The sum of all even numbers
 *
 * ex: sumEvenNumbers([1, 2, 3, 4])
 * returns: 6 (because 2 + 4 = 6)
 *
 * ex: sumEvenNumbers([4, 3, 10])
 * returns: 14
 */
function sumEvenNumbers(arr) {
  let evenOnly = arr.filter((el) => {
    return el % 2 === 0;
  });
  return evenOnly.reduce((accum, el) => {
    return accum + el;
  });
}
//correct
module.exports = sumEvenNumbers;
