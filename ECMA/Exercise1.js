class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    
    getBookInfo() {
        console.log(this.title + " by " + this.author + ", published in " + this.publicationYear);
    }
}

const book1 = new Book("Games", "Test Testie", 1923);
const book2 = new Book("Sports", "Jane Doe", 1965);
const book3 = new Book("Food", "John Doe", 1986);

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
    }
    
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }
    
    listBooks() {
        this.books.forEach(book => book.getBookInfo());
    }
}

const myLibrary = new Library("Bästa bibblan i byn");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

console.log("Listing all books in the library:");
myLibrary.listBooks();

myLibrary.removeBook("Sports");

console.log("Listing all books after removing 'Sports':");
myLibrary.listBooks();
