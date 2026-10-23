/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

type Patient = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
};

const patients: Patient[] = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(patientList: Patient[]): number {
    return patientList.length;
}

function countAdmittedPatients(patientList: Patient[]): number {
    return patientList.filter((patient) => patient.admitted).length;
}

function countDischargedPatients(patientList: Patient[]): number {
    return patientList.filter((patient) => !patient.admitted).length;
}

function countPatientsInDepartment(patientList: Patient[], department: string): number {
    return patientList.filter((patient) => patient.department === department).length;
}

function getHighestHospitalBill(patientList: Patient[]): number {
    return Math.max(...patientList.map((patient) => patient.bill));
}

function getLowestHospitalBill(patientList: Patient[]): number {
    return Math.min(...patientList.map((patient) => patient.bill));
}

function calculateAverageHospitalBill(patientList: Patient[]): number {
    if (patientList.length === 0) {
        return 0;
    }

    const totalBill = patientList.reduce((total, patient) => total + patient.bill, 0);
    return totalBill / patientList.length;
}

function calculateTotalHospitalRevenue(patientList: Patient[]): number {
    return patientList.reduce((total, patient) => total + patient.bill, 0);
}

function getAdmittedPatientNames(patientList: Patient[]): string[] {
    return patientList.filter((patient) => patient.admitted).map((patient) => patient.name);
}

function printHospitalReport(patientList: Patient[]): void {
    const pediatricsPatients = countPatientsInDepartment(patientList, "Pediatrics");
    const cardiologyPatients = countPatientsInDepartment(patientList, "Cardiology");
    const orthopedicsPatients = countPatientsInDepartment(patientList, "Orthopedics");

    console.log("Hospital Daily Report");
    console.log(`Total patients: ${countTotalPatients(patientList)}`);
    console.log(`Total admitted patients: ${countAdmittedPatients(patientList)}`);
    console.log(`Total discharged patients: ${countDischargedPatients(patientList)}`);
    console.log(`Patients in Pediatrics: ${pediatricsPatients}`);
    console.log(`Patients in Cardiology: ${cardiologyPatients}`);
    console.log(`Patients in Orthopedics: ${orthopedicsPatients}`);
    console.log(`Highest hospital bill: ${getHighestHospitalBill(patientList)}`);
    console.log(`Lowest hospital bill: ${getLowestHospitalBill(patientList)}`);
    console.log(`Average hospital bill: ${calculateAverageHospitalBill(patientList).toFixed(2)}`);
    console.log(`Total hospital revenue: ${calculateTotalHospitalRevenue(patientList)}`);
    console.log(`Admitted patients: ${getAdmittedPatientNames(patientList).join(", ")}`);
}

printHospitalReport(patients);