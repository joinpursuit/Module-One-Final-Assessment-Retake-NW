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
    let amountOfThree = 0;
    let convert = n.toString();
    
    //console.log(n.length);
for (let i = 0; i < convert.length; i++){
    if (convert[i] === "3"){
       // console.log(convert);
        amountOfThree = amountOfThree + 1;
    }
}
return amountOfThree;
}

module.exports = countThrees
