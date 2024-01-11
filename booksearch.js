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