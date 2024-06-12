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

console.log("Lista på alla böcker:");
myLibrary.listBooks();

myLibrary.removeBook("Sports");

console.log("Lista på alla böcker(utan Sports):");
myLibrary.listBooks();

//Exercise2

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getCarInfo = function() {
    console.log(`Car Info: ${this.make} ${this.model} (${this.year})`);
};

function ElectricCar(make, model, year, batteryCapacity) {
   
    Car.call(this, make, model, year);
    this.batteryCapacity = batteryCapacity;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getBatteryInfo = function() {
    console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
};

const myCar = new Car('Toyota', 'Corolla', 2021);
const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2022, 75);

myCar.getCarInfo(); 
myElectricCar.getCarInfo(); 
myElectricCar.getBatteryInfo(); 


//Exercise3
function createFunctions(n) {
    const functions = [];
    for (let i = 0; i < n; i++) {
        functions.push((function(index) {
            return function() {
                return index;
            };
        })(i));
    }
    return functions;
}

const funcs = createFunctions(5);
console.log(funcs[0]()); 
console.log(funcs[1]()); 
console.log(funcs[2]()); 
console.log(funcs[3]()); 
console.log(funcs[4]()); 


//Exercise4
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

export default add; 
export { subtract, multiply, divide };
