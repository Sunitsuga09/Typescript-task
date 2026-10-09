/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let Submitted: number = 0;
let notSubmit: number = 0;
let passed: number = 0;
let revise: number = 0;
let totalScore: number = 0;
const displayNotSubmit: string[] = [];
const displayRevise: string[] = [];

for (let i : number = 0; i < submissions.length ; i++) {
    if (submissions[i].submitted){
    Submitted++;
    }
    if (!submissions[i].submitted){
    notSubmit++;
    displayNotSubmit.push(submissions[i].student)
    }
    if (submissions[i].submitted && submissions [i].score >= 75){
    passed++;
    }
    if (submissions[i].submitted && submissions [i].score < 75) {
    revise++;
    displayRevise.push(submissions[i].student)
    }

    totalScore += submissions[i].score;
}

const averageScore: number = totalScore / submissions.length

console.log (`${Submitted} Who submitted their assignment.`);
console.log (`${notSubmit} Who did not submit.`);
console.log (`${passed} Who Passed.`);
console.log (`${revise} Must revise their assignment.`);
console.log (`${displayNotSubmit.join(", ")} Names of students who did not submit.`);
console.log (`${displayRevise.join(", ")} Names of students who must revise.`);
console.log (`${averageScore} Class Average Score.`);