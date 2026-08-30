/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */



type student = {
    studentId: string;
    fullName: string;
    age: number;
    isActive: boolean;
};


const student1: student = {
    studentId: "ST2026045",
    fullName: "Nadia Putri",
    age: 15,
    isActive: true,
};

const student2: student = {
    studentId: "ST2026046",
    fullName: "Raka Pratama",
    age: 16,
    isActive: true,
};


const student3: student = {
    studentId: "ST2026047",
    fullName: "Siti Rahma",
    age: 15,
    isActive: false,
};

console.log("\n=== STUDENT 1 ===");
console.log(student1)

console.log("\n=== STUDENT 2 ===");
console.log(student2)

console.log("\n=== STUDENT 3 ===");
console.log(student3)