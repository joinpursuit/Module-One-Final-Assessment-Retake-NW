/**
* Returns the total number of students in all classes
* 
* @param {object[]} arr - The input array of classes. Objects will be in the form: { subject: "math", studentCount: 30 }
* @returns {number} - The total number of students
* 
* ex: totalNumberOfStudents([{subject: "A", studentCount: 10}, {subject "B", studentCount: 100}])
* returns: 110 
* 
* ex: totalNumberOfStudents([{subject: "Math", studentCount: 50}, {subject: "Gym", studentCount: 17}, {subject: "Art", studentCount: 100}])
* returns: 167
*/

const totalNumberOfStudents = (arr) => {
    let sum = 0;
    for(const studentCount in arr){
     sum += arr[studentCount];

    }
        return sum;
}

module.exports = totalNumberOfStudents
