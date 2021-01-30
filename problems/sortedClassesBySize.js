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

const sortClassesBySize = (arr) => {
  return arr
    .sort((subject1, subject2) => {
      //a- b
      return subject1.studentCount - subject2.studentCount; //a -b
    })
    .map((arr) => {
      return arr;
    });
};

module.exports = sortClassesBySize;
