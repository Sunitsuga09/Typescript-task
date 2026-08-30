/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */


type employee = {
    present: boolean;
    name: string;
    id: number;
    date: Date;
    checkInTime: string;
    checkOutTime: string;
    totalWorkingHours: number;
};

const employee1: employee ={
    present: true,
    name: "Mario",
    id: 98505,
    date: new Date("2026-08-30"), 
    checkInTime: "06.00",
    checkOutTime: "16.00",
    totalWorkingHours: 10,
};

const employee2: employee ={
    present: false,
    name: "Kenzi",
    id: 98723,
    date: new Date("2026-08-30"), 
    checkInTime: "0",
    checkOutTime: "0",
    totalWorkingHours: 0,
};

const employee3: employee ={
    present: true,
    name: "Ray",
    id: 98542,
    date: new Date("2026-08-30"), 
    checkInTime: "07.00",
    checkOutTime: "17.00",
    totalWorkingHours: 10,
};

console.log("\n=== EMPLOYEE 1 ===");
console.log(employee1)

console.log("\n=== EMPLOYEE 2 ===");
console.log(employee2)

console.log("\n=== EMPLOYEE 3 ===");
console.log(employee3)