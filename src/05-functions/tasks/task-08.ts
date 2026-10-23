/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

type Submission = {
    student: string;
    submitted: boolean;
    score: number;
};

const submissions: Submission[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countTotalStudents(submissionList: Submission[]): number {
    return submissionList.length;
}

function countSubmittedAssignments(submissionList: Submission[]): number {
    return submissionList.filter((submission) => submission.submitted).length;
}

function countMissingAssignments(submissionList: Submission[]): number {
    return submissionList.filter((submission) => !submission.submitted).length;
}

function countPassedStudents(submissionList: Submission[]): number {
    return submissionList.filter((submission) => submission.submitted && submission.score >= 75).length;
}

function countStudentsRequiringRevision(submissionList: Submission[]): number {
    return submissionList.filter((submission) => submission.submitted && submission.score < 75).length;
}

function calculateAverageScore(submissionList: Submission[]): number {
    if (submissionList.length === 0) {
        return 0;
    }

    const totalScore = submissionList.reduce((total, submission) => total + (submission.submitted ? submission.score : 0), 0);
    return totalScore / submissionList.length;
}

function findHighestScore(submissionList: Submission[]): number {
    return Math.max(...submissionList.map((submission) => submission.score));
}

function findLowestScore(submissionList: Submission[]): number {
    return Math.min(...submissionList.map((submission) => submission.score));
}

function printSubmissionReport(submissionList: Submission[]): void {
    console.log("Submission Report");
    console.log(`Total students: ${countTotalStudents(submissionList)}`);
    console.log(`Submitted assignments: ${countSubmittedAssignments(submissionList)}`);
    console.log(`Missing assignments: ${countMissingAssignments(submissionList)}`);
    console.log(`Passed students: ${countPassedStudents(submissionList)}`);
    console.log(`Students requiring revision: ${countStudentsRequiringRevision(submissionList)}`);
    console.log(`Average score: ${calculateAverageScore(submissionList).toFixed(2)}`);
    console.log(`Highest score: ${findHighestScore(submissionList)}`);
    console.log(`Lowest score: ${findLowestScore(submissionList)}`);
}

printSubmissionReport(submissions);