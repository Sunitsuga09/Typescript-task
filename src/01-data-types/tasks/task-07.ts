/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type student = {
    fullName: string;
    studentId: number;
    gradeLevel: string;
};

type course = {
    courseTitle: string
    courseId: number;
    instrukturName: string;
    totalLearningHour: number;
};

const student1: student = {
    fullName: "Agustinus Ray",
    studentId: 762139,
    gradeLevel: "Intermediate",
};

const course1: course = {
    courseTitle: "English class",
    courseId: 9239,
    instrukturName: "Mr. Sunit",
    totalLearningHour: 3,
};

const student2: student = {
    fullName: "Joseph Brandon Narthanael",
    studentId: 762198,
    gradeLevel: "Beginer",
};

const course2: course = {
    courseTitle: "Math & English class",
    courseId: 9130,
    instrukturName: "Mr. Suga",
    totalLearningHour: 2,
};

const student3: student = {
    fullName: "Oliver Kenzo Rafandra",
    studentId: 761290,
    gradeLevel: "Beginer",
};

const course3: course = {
    courseTitle: "English class",
    courseId: 9221,
    instrukturName: "Mr. Suga",
    totalLearningHour: 1,
};

console.log("\n=== STUDENT 1 ===");
console.log(student1)
console.log("\n=== COURSE 1 ===");
console.log(course1)

console.log("\n=== STUDENT 2 ===");
console.log(student2)
console.log("\n=== COURSE 2 ===");
console.log(course2)

console.log("\n=== STUDENT 3 ===");
console.log(student3)
console.log("\n=== COURSE 3 ===");
console.log(course3)