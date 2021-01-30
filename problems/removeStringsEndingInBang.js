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

// function removeStringsEndingInBang(arr) {
//     neuArr = []
//     for (let i = 0; i <= arr.length-1; i++) {
        
//         if (!arr[i].includes('!')){
//             neuArr.push(arr[i])
//         }
//     } console.log(neuArr)
//     return neuArr
// }
function removeStringsEndingInBang(arr) {
    const neuArr = [];
    for (let i = 0; i < arr.length; i++){
        const str = arr[i]
        console.log(arr[i])
        if (str[str.length - 1] !== '!') {
            neuArr.push(str) 
        }         
    } 
    return neuArr
}

console.log(removeStringsEndingInBang(["!", "", "a"]))

module.exports = removeStringsEndingInBang