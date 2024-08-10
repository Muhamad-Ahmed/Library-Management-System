import inquirer from "inquirer";

export type Book = {
  book: string;
  author: string;
  publishedYear: number;
};

export type bookName = {
  book: string;
};

export class Library {
  private book: Book[];

  constructor(...books: Book[]) {
    this.book = books;
  }

  addBook(book: Book): void {
    this.book.push(book);
  }

  removeBook(bookName: bookName): void {
    const foundBook = this.book.find((books) => books.book === bookName.book);
    if (foundBook) {
      this.book = this.book.filter((books) => books.book !== bookName.book);
      console.log(`Book has been removed: ${foundBook.book}.`);
    } else {
      console.log(`Book not found: ${bookName.book}.`);
    }
  }

  displayBooks(): void {
    console.log(this.book);
  }
  searchBook(bookAuthor: string) {
    const foundBook = this.book.find((books) => books.author === bookAuthor);
    if (foundBook) {
      console.log(`Found book by ${bookAuthor}: ${foundBook.book}`);
    } else {
      console.log(`No book found by ${bookAuthor}.`);
    }
  }
}
