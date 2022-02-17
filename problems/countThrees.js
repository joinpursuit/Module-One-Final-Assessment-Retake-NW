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
  // Declare/defined some of the needed variables. 
  let threesArr;
  let three = 3;
  let numStr = String(n);
  // Changes the inputted number`n` into a string. Then splits the string along empty string spaces, converting them back to numbers (using the .map() method iterating over the string number array) and pushing them to a new array `threesArr` as individual numbers.
  threesArr = numStr.split('').map((i) => { return Number(i); });

  // Create another function `countThree` within my `countThrees` function. It uses the .reduce() method with 2 parameters: `threesArr` array and `three` variable which will hold the value we are checking our array against as we iterate over it. Inside our .reduce() method we have 2 parameters: the accumulator and the element. The accumulator will be incremented for every element in the array by 1 if the element is equal to the `three` variable which is set to the number 3 since this is what we are chekcing for: how many 3s are in the array. We use a ternary operator to check and if there is another element that equals `three` then increment the accumulator by 1 else it should remain initial value which we set to 0. So, if there are no 3s then the accumulator will return as 0, else the cound of all the 3s in the array will be returned.
  const countThree = function (threesArr, three) {
    return threesArr.reduce((accumulator, element) => {
      return (three === element ? accumulator + 1: accumulator)
    }, 0)
  }

  return countThree(threesArr, three);
}

module.exports = countThrees
