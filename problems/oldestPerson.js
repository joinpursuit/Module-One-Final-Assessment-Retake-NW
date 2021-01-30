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
function oldestPerson(object) {
  let arrOldestPerson = [];

  for (let key in object) {
    arrOldestPerson.push([key, object[key]]);
  }
  arrOldestPerson.sort((a, b) => {
    return b[1] - a[1];
  });
  return arrOldestPerson[0][0];
}
//correct

module.exports = oldestPerson;
