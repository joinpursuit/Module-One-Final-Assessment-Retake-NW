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

function countThrees(number) {
    const stringify = Array.from(String (number));
    let counter = 0;
    for (let i = 0, len = stringify.length; i < len; i++){
        console.log(typeof stringify[i])
        if (stringify[i] === '3'){
            counter++
        }
    }
    return counter;    
}

console.log(countThrees(3203))
module.exports = countThrees
