/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const hihu = borrowings.filter(
    (item) => item.student === "Andi"
);


const borrowingsTransactions = borrowings.map (borrowing => {
    const haha = books.find (item => item.id === borrowing.bookId)
    return {
        name : borrowing.student,
        book : haha?.title

    };
});

const opo = borrowings.filter((item) => {
    const book = books.find((book) => {
        return book.id === item.bookId;
    });

    return book?.category === "Programming";
});

const heeh = borrowings.length

const averageScore = borrowings.reduce((total, borrowing) => {
    return total + borrowing.days;
},0) /borrowings.length;

const upper7 = borrowings.filter(borrowings => borrowings.days > 7);

console.log ("Andi's Transactions: ", hihu);
console.log ("Borrowing Transaction: ", borrowingsTransactions);
console.log ("Students Who Borrowed a Programming Book: ", opo);
console.log ("Total Number of Borrowing", heeh)
console.log ("Average Borrowing Duration: ", averageScore.toFixed(2));
console.log ("Borrowed Books For More Than 7 days: ", upper7);