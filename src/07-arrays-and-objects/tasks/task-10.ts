/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */

const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentResults = submissions.map(submission => {
    const correct = submission.answers.filter(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        return question?.correctAnswer === answer.answer;
    }).length;

    const wrong = questions.length - correct;
    const score = correct * 25;

    return {
        student: submission.student,
        correct,
        wrong,
        score
    };
});

const answerResults = studentResults.map(student => ({
    student: student.student,
    correct: student.correct,
    wrong: student.wrong
}));


const categories = [...new Set(questions.map(q => q.category))];

const categoryAverages = categories.map(category => {
    const categoryQuestions = questions.filter(q => q.category === category);

    const totalPoints = submissions.reduce((sum, submission) => {
        const correctAnswers = submission.answers.filter(answer => {
            const question = categoryQuestions.find(
                q => q.id === answer.questionId
            );

            return question?.correctAnswer === answer.answer;
        }).length;

        return sum + (correctAnswers * 25);
    }, 0);

    return {
        category,
        averageScore: Number((totalPoints / submissions.length).toFixed(2))
    };
});


const scores = studentResults.map(student => student.score);

const totalScore = scores.reduce((sum, score) => sum + score, 0);

const averageScore = Number((totalScore / scores.length).toFixed(2));

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const passedStudents = studentResults.filter(
    student => student.score >= 75
).length;

const failedStudents = studentResults.filter(
    student => student.score < 75
).length;

const passRate = Number(
    ((passedStudents / submissions.length) * 100).toFixed(2)
);

const analytics = {
    totalStudents: submissions.length,
    averageScore,
    highestScore,
    lowestScore,
    passedStudents,
    failedStudents,
    passRate
};

console.log("1. Student Scores:", studentResults);
console.log("2. Correct and Wrong Answers:", answerResults);
console.log("3. Category Averages:", categoryAverages);
console.log("4. Final Exam Analytics:", analytics);