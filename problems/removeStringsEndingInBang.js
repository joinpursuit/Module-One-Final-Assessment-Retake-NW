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
    neuArr = []
    for (let i = 0; i <= arr.length-1; i++) {
        
        if (!arr[i].includes('!')){
            neuArr.push(arr[i])
        }
    } console.log(neuArr)
    return neuArr
}
// function removeStringsEndingInBang(arr) {
//     neuArr = []
//     remove = '!'
//     console.log(arr.indexOf(remove))
// }

console.log(removeStringsEndingInBang(["hello!", "hel!o", "a"]))

module.exports = removeStringsEndingInBang