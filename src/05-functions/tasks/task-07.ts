/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

type Student = {
  name: string;
  major: string;
  active: boolean;
};

const students: Student[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(studentList: Student[]): number {
  return studentList.filter((student) => student.active).length;
}

function countInactiveStudents(studentList: Student[]): number {
  return studentList.filter((student) => !student.active).length;
}

function countStudentsByMajor(studentList: Student[], major: string): number {
  return studentList.filter((student) => student.major === major).length;
}

function printEnrollmentReport(studentList: Student[]): void {
  const totalStudents = studentList.length;
  const activeStudents = countActiveStudents(studentList);
  const inactiveStudents = countInactiveStudents(studentList);
  const softwareEngineeringStudents = countStudentsByMajor(studentList, "Software Engineering");
  const networkingStudents = countStudentsByMajor(studentList, "Networking");
  const multimediaStudents = countStudentsByMajor(studentList, "Multimedia");

  console.log("Enrollment Report");
  console.log(`Total students: ${totalStudents}`);
  console.log(`Active students: ${activeStudents}`);
  console.log(`Inactive students: ${inactiveStudents}`);
  console.log(`Software Engineering students: ${softwareEngineeringStudents}`);
  console.log(`Networking students: ${networkingStudents}`);
  console.log(`Multimedia students: ${multimediaStudents}`);
}

printEnrollmentReport(students);