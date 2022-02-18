/**
* Removes all strings ending in "!" from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that don't end with "!"
*
* ex: removeStringsEndingInBang(["Hello", "Hi!", "Greetings"])
* returns: ["Hello", "Greetings"]
*
* ex: removeStringsEndingInBang(["!", "", "a"])
* returns: ["", "a"]
*/

function removeStringsEndingInBang(arr) {
  // Loop through the inputted array. Check every element in the array and using the .includes() method see if that string has any exclamations characters within it.
  for (let i = 0; i < arr.length; i++) {
    // We only want to remove the strings with the bang operator at the end of the string and not anywhere else in the string. So, in the if conditional we are specifically seeing if the last character in the string equals the bang operator exclusively.
    if (arr[i][arr[i].length-1] === '!') { 
      // "9 Ways to Remove Elements From A JavaScript Array - Plus How to Safely Clear JavaScript Arrays"
      // by Chris Love @ https://love2dev.com/blog/javascript-remove-from-array/
      // "Removing Array Items By Value Using Splice" - 2nd example
      // "Thanks to Kristian Sletten for pointing out the issue with the loop skipping the following item."

      // If the string includes any exclamation characters,using the .splice() method, begin at that index, `i` and delete that whole element aka string from the array.
      arr.splice(i, 1);
      // Using the decrement operator decrease it by 1 to reset it so the next string with the exclamation characters will not be skipped and remove that one too and so on untill all such strings are removed from the whole array.
      i--;
      
    }
  }
  // Return the array sans strings with exclamation points or bangs!
  return arr; 
}

module.exports = removeStringsEndingInBang
