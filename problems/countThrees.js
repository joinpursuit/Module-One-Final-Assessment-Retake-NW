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
function countThrees(n, num) {
    let counter = 0;
    let remainder;
    while( num > 0) {
        remainder = num % 10;
        num /= 10;
        if(remainder == 3)
        counter++;
    } 
    return counter;
};


module.exports = countThrees
