"use strict"

class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availability() { //Allows us to write Book.availability instead of Book.getAvailability
        return this.getAvailability();
    }

     getAvailability() {
        if (this.numCopies === 0){
            return "Out of stock";
        } else if (this.numCopies < 10){
            return "Low stock";
        } else {
            return "In stock";
        }  
    }

    sell(numSold = 1){
        this.numCopies -= numSold;
    }

    restock(numStocked = 5){
        this.numCopies += numStocked;
    }
}

//Test
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);

HungerGames.restock(12);
console.log(HungerGames.availability);

HungerGames.sell(17);
console.log(HungerGames.availability);

//Second challenge
class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies); //Collects the arguments from the parent constructor
        this.edition = edition; //the 5th argument for this second challenge
    }
        getEdition(){
            return `The current version of this book is ${this.edition}`;
        }
}

//Test 2
const newBook = new TechnicalBook("Javascript All-in-One For Dummies", "Chris Minnick", 1119906830, 10, "1.");
console.log(newBook.availability);
console.log(newBook.getEdition());
console.log(newBook);