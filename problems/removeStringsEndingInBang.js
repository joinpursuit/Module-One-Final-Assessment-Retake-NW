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
//still working on
const removeStringsEndingInBang = (arr) => {
  let output = [];
  arr.filter((el) => {
    if (el.length - 1 === "!") {
      output.push(el);
    }
  });
  return output;
};

module.exports = removeStringsEndingInBang;
