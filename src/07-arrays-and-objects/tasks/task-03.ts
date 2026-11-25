/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const presentsStudents = students.filter (students => attendance.find (item => item.studentId === students.id)?.status === "present").map (student => student.name);
const absentStudents = students.filter (students => attendance.find (item => item.studentId === students.id)?.status === "absent").map (student => student.name);
const lateStudents = students.filter (students => attendance.find (item => item.studentId === students.id)?.status === "late").map (student => student.name);
const studentsStatus = students.map (students => {
    const record = attendance.find (item => item.studentId === students.id)
    return {
        name : students.name,
        status: record?.status
    };
});


console.log (`Present Students: ${presentsStudents}`);
console.log (`Absent Student: ${absentStudents}`);
console.log (`Late Student: ${lateStudents}`);
console.log ("Students and Their Status: ", studentsStatus);