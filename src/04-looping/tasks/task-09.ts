/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let AGrade: number = 0;
let BGrade: number = 0;
let CGrade: number = 0;
let DGrade: number = 0;
let totalScore: number = 0;
let highestScore: number = students[0].score;
let lowestScore: number = students[0].score;


for (let i: number = 0; i < students.length; i++) {
    if (students[i].score >= 90 ){
        AGrade++
    }
    else if (students[i].score >= 80 ){
        BGrade++
    }
    else if (students[i].score >= 70 ){
        CGrade++
    }
    else {
        DGrade++
    }

    if (students[i].score > highestScore)
        highestScore = students[i].score
    if (students[i].score < lowestScore)
        lowestScore = students[i].score

    totalScore += students[i].score
}

const averageScore: number = totalScore / students.length;

console.log (`${AGrade} A Students`);
console.log (`${BGrade} B Students`);
console.log (`${CGrade} C Students`);
console.log (`${DGrade} D Students`);
console.log (`${highestScore} Highest Score`);
console.log (`${lowestScore} Lowest Score`);
console.log (`${averageScore} Average Score`)