/**
* Returns an array of class names sorted by number of students, from lowest to highest
* 
* @param {object[]} arr - The input array. Objects will be in the form: { subject: "math", studentCount: 10 }
* @returns {string[]} - Returns an array of class names, sorted by class size in ascending order (lowest to highest)
* 
* ex: sortClassesBySize([ {subject: "math", studentCount: 50}, {subject: "gym", studentCount: 10}, {subject: "history", studentCount: 300}])
* returns: ["gym", "math", "history"] (from fewest to most students)
*
* ex: sortClassesBySize([ {subject: "C", studentCount: 47}, {subject: "B", studentCount: 1}, {subject: "A", studentCount: 88}]) 
* returns: ["B", "C", "A"]
*/

function sortClassesBySize(subjects) {
  // A variable, `sortedArray` is declared and assigned a value of the inputted array of objects, `subjects` with the .sort() method attached. Then this method uses an anonymous arrow function with 2 parameters that compare the two number values of the studenCount keys in the objects. As all the objects in the array are compared by two each time they are reassembled in ascending order. These objects are then pushed into the new array, `sortedArray`.
  const sortedArray = subjects.sort((subjectCount1, subjectCount2) => {
    return subjectCount1.studentCount - subjectCount2.studentCount;
  });
  
  // Another empty array, `classesLowToHigh` is created.
  const classesLowToHigh = [];
  
  // A for loop loops through `sortedArray`, and pushes the subject values into the new array as the problem asks.
  for (let i = 0; i < sortedArray.length; i++) {
    classesLowToHigh.push(sortedArray[i].subject);
  }
  // Return the `classesLowToHigh` array with string names of subjects in ascending order as the problem asks.
  return classesLowToHigh;

}

module.exports = sortClassesBySize
