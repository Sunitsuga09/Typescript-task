/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

function calculateFinalGrade(assignment: number, midterm: number, final: number): number {
    let total = ((0.3) * assignment) + ((0.3) * midterm) + ((0.4) * final)
    return total;
}

let Student1 = "Alya";
let FinalExamScore1 = calculateFinalGrade(85,80,92);
let Student2 = "Budi";
let FinalExamScore2 = calculateFinalGrade(78,75,81);
let Student3 = "citra";
let FinalExamScore3 = calculateFinalGrade(90,88,95);
console.log(Student1, FinalExamScore1)
console.log(Student2, FinalExamScore2)
console.log(Student3, FinalExamScore3)