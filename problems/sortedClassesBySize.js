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
let result = [];
let compare = arr[0];

arr.sort((a,b) => {return a.studentCount - b.studentCount})// is it possible to do it with using sort?
for (let i = 0; i < arr.length; i++){
    result.push(arr[i].subject);
}

// for (let i = 0; i < arr.length; i++){

//     for (let j = 0; j < result.length; j++){
//         if (arr[i].studentCount < )

//     }

// }

// for (const clas of arr){
//         //console.log(clas.studentCount);
//        if (clas.studentCount < compare.studentCount){
//             result.unshift(clas.subject);
//             console.log(result);
//        } else {
//            result.push(clas.subject);
//        }
//  }




//console.log(result.pop());

    // for (let i = 1; i < arr.length; i++){
    //    // console.log(arr[i+1].studentCount)
    //     if (arr[i].studentCount > compare[i].studentCount ){
    //         //console.log("asdsa")
    //         //result.pop();
    //         //result.unshift(arr[i].subject);
    //         result.push(arr[i].subject);
    //     } else {
    //         //compare = arr[i];
    //         result.unshift(arr[i].subject);
    //         //result.push(arr[i].subject);
    //     }
    // }


//console.log(result);

return result;

}

module.exports = sortClassesBySize
