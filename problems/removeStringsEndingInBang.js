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
 return arr.filter((el)=>{
    return el[el.length - 1] != "!"
})
};
console.log(removeStringsEndingInBang(["Hello", "Hi!", "Greetings"]))
module.exports = removeStringsEndingInBang
