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

function sortClassesBySize(arr) {
  /*let studentsNumber = [];
  let classes = [];
  let count = arr[0].studentCount;

   console.log(arr.sort(a,b));
  
  // arr.sort()
 /* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].subject);
  studentsNumber.push(arr[i].studentCount);
  }*/
  /*studentsNumber.sort();
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i].studentCount < count) {
        classes.push(arr[i].subject);
        count = arr[i].studentCount;
    } 
  }*/
//console.log(classes);

let studentsNumber = [];
arr.sort((a,b) => {return a.studentCount - b.studentCount})
for (let i = 0; i < arr.length; i++){
    studentsNumber.push(arr[i].subject);
}
return studentsNumber;
}

module.exports = sortClassesBySize
