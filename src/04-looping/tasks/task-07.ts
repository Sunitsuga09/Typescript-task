/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentStudents: number = 0;
let absentStudents: number = 0;
const displayAbsentStudents: string[] = [];

for (let i = 0; i < attendances.length; i++) {
  if (attendances[i].present) {
    presentStudents++;
  } else {
    absentStudents++;
    displayAbsentStudents.push(attendances[i].name);
  }
}

const attendancePercentage: number = (presentStudents / attendances.length) * 100;

console.log(`${presentStudents} Present Students`);
console.log(`${absentStudents} Absent Students`);
console.log(`Names of Absent Students: ${displayAbsentStudents.join(", ")}`);
console.log(`Attendance Percentage: ${attendancePercentage.toFixed(2)}%`)