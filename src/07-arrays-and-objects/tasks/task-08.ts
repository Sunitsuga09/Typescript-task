/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */

const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const averageScores = employees.map(employee => {
    const total = employee.projects.reduce((sum, project) => {
        return sum + project.score;
    }, 0);

    const average = total / employee.projects.length;

    return {
        name: employee.name,
        averageScore: average
    };
});

const highPerformers = averageScores.filter(employee => {
    return employee.averageScore > 85;
});

const lowScoreEmployees = employees.filter(employee => {
    return employee.projects.some(project => project.score < 80);
});

console.log("1. Average Scores:", averageScores);
console.log("2. Above 85:", highPerformers);
console.log("3. Employees with score below 80:", lowScoreEmployees);
