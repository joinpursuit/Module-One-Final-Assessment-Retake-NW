const sortClassesBySize = require("../problems/sortedClassesBySize")

describe("sortClassesBySize", () => {
    test("Returns an array of class names sorted in ascending order by class size", () => {
        expect(sortClassesBySize([
            {subject: "math", studentCount:10},
            {subject: "english", studentCount:20},
            {subject: "history", studentCount:25},
            {subject: "science", studentCount:15},
            {subject: "gym", studentCount:60},
        ])).toEqual(["math", "science", "english", "history", "gym"])
        expect(sortClassesBySize([
            {subject: "Introduction to Computer Science", studentCount:100},
            {subject: "Systems Programming and Machine Organization", studentCount:80},
            {subject: "Introduction to Theoretical Computer Science", studentCount:70},
            {subject: "Data Structures and Algorithms", studentCount:95},
        ])).toEqual(["Introduction to Theoretical Computer Science", "Systems Programming and Machine Organization", "Data Structures and Algorithms", "Introduction to Computer Science",])
    })
})