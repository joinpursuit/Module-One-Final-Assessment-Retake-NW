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
const oldestPerson = (obj) => {
    let string = "";
    let oldest = -Infinity;
    for(const key in obj){
        if(obj[key] > oldest){
            oldest = obj[key];
            string = key;
        }

    }
    return string;

}

module.exports = oldestPerson