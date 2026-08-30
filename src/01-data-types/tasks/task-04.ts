/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */



type book = {
    author: string;
    title: string;
    isbnNumber: number;
    numberOfPages: number;
    available: boolean;
    bookCategory: string;
};

const book1: book ={
    author: "Sunitsuga",
    title: "Asal-Usul Ambaruwo",
    isbnNumber: 91827,
    numberOfPages: 379,
    available: true,
    bookCategory: "Horor",
    
};

const book2: book ={
    author: "Sunit",
    title: "Sejarah Kekaisaran Ngawi",
    isbnNumber: 98765,
    numberOfPages: 1098,
    available: false,
    bookCategory: "History",
};

const book3: book ={
    author: "Sunit",
    title: "3 Pilot Ngawi Terjebak di Pulau Kanibal",
    isbnNumber: 12567,
    numberOfPages: 209,
    available: true,
    bookCategory: "Fiction",
};


console.log("\n=== BOOK 1 ===");
console.log(book1)

console.log("\n=== BOOK 2 ===");
console.log(book2)

console.log("\n=== BOOK 3 ===");
console.log(book3)