export class Library {
    constructor(...books) {
        this.book = books;
    }
    addBook(book) {
        this.book.push(book);
    }
    removeBook(bookName) {
        const foundBook = this.book.find((books) => books.book === bookName.book);
        if (foundBook) {
            this.book = this.book.filter((books) => books.book !== bookName.book);
            console.log(`Book has been removed: ${foundBook.book}.`);
        }
        else {
            console.log(`Book not found: ${bookName.book}.`);
        }
    }
    displayBooks() {
        console.log(this.book);
    }
    searchBook(bookAuthor) {
        const foundBook = this.book.find((books) => books.author === bookAuthor);
        if (foundBook) {
            console.log(`Found book by ${bookAuthor}: ${foundBook.book}`);
        }
        else {
            console.log(`No book found by ${bookAuthor}.`);
        }
    }
}
