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

const countThrees = (n) => {
    let count = 0;
    let str = n.toString();
  for(let i = 0; i <= str.length; i++){
      if("3".includes(str[i])){
          count += 1;
      }
      }
  return count;
}

module.exports = countThrees
