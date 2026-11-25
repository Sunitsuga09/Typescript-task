/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentScores = students.map(student => {
    const score = student.answers.reduce((total, answer, index) => {
        if (answer === correctAnswers[index]) {
            return total + 20
        }
        else {
            return total
        }
    }, 0);
    return {
        name: student.name,
        score: score
    };
});

const passedStudents = studentScores.filter(student => student.score > 70);

const highestStudent = studentScores.reduce((highest, student) => {
    return student.score > highest.score ? student : highest;
});

const averageScore = studentScores.reduce((total, students) => {
    return total + students.score;
},0) /studentScores.length

console.log ("Student Scores: ", studentScores)
console.log ("Paased Students: ", passedStudents)
console.log ("Student With Highest Score: ", highestStudent)
console.log ("Average Score: ", averageScore)