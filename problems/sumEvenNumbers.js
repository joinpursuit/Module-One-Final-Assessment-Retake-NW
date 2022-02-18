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

function sumEvenNumbers(nums) {
  // Declare a number variable for the sum of all even numbers.
  let sumEvens = 0;
  // Declare an empty array `evens` to push all the evens from the inputted `nums` array.
  
  // For loop to loop over the inputted `nums` array.
  for (let i = 0; i < nums.length; i++) {
    // If an element of the `nums` array is even, add it to the sumEvens number variable and assign the value to the said variable. 
    if (nums[i] % 2 === 0) {
      // Keep looping through the rest of the `nums` array, and adding to the total and storing it to the `sumEvens` variable.
      sumEvens += nums[i];
    }
    
  }
  // Return `sumEvens` variable for the total of the evens numbers.
  return sumEvens;
}

module.exports = sumEvenNumbers
