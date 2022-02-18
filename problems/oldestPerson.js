/**
 * Takes an object where the keys are people's names and the values are their ages.
 * Returns the name of the person with the greatest age.
 *
 * @param {object} obj - The input object of the form { 'Joe': 42, 'Tanya': 11 }
 * @returns {string} - Returns the name of the oldest person
 *
 * ex: oldestPerson({ 'Joe': 42, 'Tanya': 11 })
 * returns: "Joe"
 *
 * ex: oldestPerson({ 'Marcus': 29, 'Julia': 29, 'Kevin': 34 })
 * returns: 'Kevin'
 */
function oldestPerson(obj) {
  // Declare/define the `oldestPerson` variable. Use the Object.keys() method on the `obj` object. Then start with the first object key/value pair (in the accumulator position). Then compare whether the next object key/value pair is larger or not. If it is, it becomes the accumulator. Which ever is the last one, is the largest. In this case it will represent the oldest person by value. Then the key, which is the name of the person will be returned.
  let oldestPerson = Object.keys(obj).reduce((firstPerson, nextPerson) => obj[firstPerson] > obj[nextPerson] ? firstPerson : nextPerson);

  return oldestPerson;


}

module.exports = oldestPerson