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
result = [];
//str = "apple"
//console.log(str.charAt(str.length-1));
for (let i = 0; i<arr.length; i++){
    //console.log(arr[i].charAt(arr[i].length-1));
if (arr[i].charAt(arr[i].length-1) !== "!"){
    //console.log("asdasds")
    result.push(arr[i]);
    //result.push(arr[i].substring(0, arr[i].length -1));
}

}


return result;
}

module.exports = removeStringsEndingInBang
