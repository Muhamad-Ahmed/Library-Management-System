import { Library } from "./library.js";
// Create a new library
const myLibrary = new Library({
    book: "The Prisoner of Zenda",
    author: "Brendon Mccullum",
    publishedYear: 1999,
});
myLibrary.addBook({
    book: "Python Programming",
    author: "Michael Clarke",
    publishedYear: 2002,
});
myLibrary.removeBook({ book: "Python Programming" });
myLibrary.removeBook({ book: "Java Programming" });
myLibrary.displayBooks();
myLibrary.searchBook("Brendon Mccullum");
