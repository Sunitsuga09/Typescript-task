/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};

const enrollments: Enrollment[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function countTotalEnrollments(enrollmentList: Enrollment[]): number {
    return enrollmentList.length;
}

function countCompletedEnrollments(enrollmentList: Enrollment[]): number {
    return enrollmentList.filter((enrollment) => enrollment.completed).length;
}

function countIncompleteEnrollments(enrollmentList: Enrollment[]): number {
    return enrollmentList.filter((enrollment) => !enrollment.completed).length;
}

function calculateCompletionPercentage(enrollmentList: Enrollment[]): number {
    if (enrollmentList.length === 0) {
        return 0;
    }

    return (countCompletedEnrollments(enrollmentList) / enrollmentList.length) * 100;
}

function getHighestScore(enrollmentList: Enrollment[]): number {
    return Math.max(...enrollmentList.map((enrollment) => enrollment.score));
}

function getLowestScore(enrollmentList: Enrollment[]): number {
    return Math.min(...enrollmentList.map((enrollment) => enrollment.score));
}

function calculateAverageScore(enrollmentList: Enrollment[]): number {
    if (enrollmentList.length === 0) {
        return 0;
    }

    const totalScore = enrollmentList.reduce((total, enrollment) => total + enrollment.score, 0);
    return totalScore / enrollmentList.length;
}

function countPassingStudents(enrollmentList: Enrollment[]): number {
    return enrollmentList.filter((enrollment) => enrollment.score >= 75).length;
}

function getUniqueCourses(enrollmentList: Enrollment[]): string[] {
    return [...new Set(enrollmentList.map((enrollment) => enrollment.course))];
}

function countStudentsInCourse(enrollmentList: Enrollment[], course: string): number {
    return enrollmentList.filter((enrollment) => enrollment.course === course).length;
}

function calculateAverageScoreForCourse(enrollmentList: Enrollment[], course: string): number {
    const courseEnrollments = enrollmentList.filter((enrollment) => enrollment.course === course);

    if (courseEnrollments.length === 0) {
        return 0;
    }

    const totalCourseScore = courseEnrollments.reduce((total, enrollment) => total + enrollment.score, 0);
    return totalCourseScore / courseEnrollments.length;
}

function getTotalLearningHours(enrollmentList: Enrollment[]): number {
    return enrollmentList.reduce((total, enrollment) => total + enrollment.duration, 0);
}

function calculateAverageLearningDuration(enrollmentList: Enrollment[]): number {
    if (enrollmentList.length === 0) {
        return 0;
    }

    return getTotalLearningHours(enrollmentList) / enrollmentList.length;
}

function printCompletionSummary(enrollmentList: Enrollment[]): void {
    console.log("Completion Statistics");
    console.log(`Total enrollments: ${countTotalEnrollments(enrollmentList)}`);
    console.log(`Completed enrollments: ${countCompletedEnrollments(enrollmentList)}`);
    console.log(`Incomplete enrollments: ${countIncompleteEnrollments(enrollmentList)}`);
    console.log(`Completion percentage: ${calculateCompletionPercentage(enrollmentList).toFixed(2)}%`);
}

function printAcademicSummary(enrollmentList: Enrollment[]): void {
    console.log("Academic Statistics");
    console.log(`Highest score: ${getHighestScore(enrollmentList)}`);
    console.log(`Lowest score: ${getLowestScore(enrollmentList)}`);
    console.log(`Average score: ${calculateAverageScore(enrollmentList).toFixed(2)}`);
    console.log(`Students with passing scores (>= 75): ${countPassingStudents(enrollmentList)}`);
}

function printCourseSummary(enrollmentList: Enrollment[]): void {
    console.log("Course Statistics");

    for (const course of getUniqueCourses(enrollmentList)) {
        console.log(
            `${course}: ${countStudentsInCourse(enrollmentList, course)} students, average score ${calculateAverageScoreForCourse(enrollmentList, course).toFixed(2)}`
        );
    }
}

function printLearningSummary(enrollmentList: Enrollment[]): void {
    console.log("Learning Statistics");
    console.log(`Total learning hours: ${getTotalLearningHours(enrollmentList)}`);
    console.log(`Average learning duration: ${calculateAverageLearningDuration(enrollmentList).toFixed(2)} hours`);
}

function printEnrollmentDashboard(enrollmentList: Enrollment[]): void {
    printCompletionSummary(enrollmentList);
    printAcademicSummary(enrollmentList);
    printCourseSummary(enrollmentList);
    printLearningSummary(enrollmentList);
}

printEnrollmentDashboard(enrollments);