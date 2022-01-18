'use strict'
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
    let neuArr = []
    for (let i = 0; i <= arr.length-1; i++) {
        if (!arr[i].includes('!')){
            neuArr.push(arr[i])
        }
    };
    return neuArr;
}

console.log(removeStringsEndingInBang(["!", "", "a",'a!']))

module.exports = removeStringsEndingInBang