const prompt = require("prompt-sync")();
console.log("Choose an Option (A), (B), or (C)");
const option = prompt("A) 0-100, B) 0-500, C) 0-1000: ");

const target = Math.round(Math.random() * 100);
console.log("Target: " + target);
let tryCount = 0;

function input1() {
    while (true) {
        const guess = parseInt(prompt("Guess a number between 0-100: "));
        tryCount++; 
        
        if (guess === target) {
            console.log("You guessed it right!");
            return true;
        } else if (guess > target) {
            console.log("Guess a bit low");
        } else {
            console.log("Guess a bit high");
        }
    }
}

function input2() {
    while (true) {
        const guess = parseInt(prompt("Guess a number between 0-500: "));
        tryCount++; 
        
        if (guess === target) {
            console.log("You guessed it right!");
            return true;
        } else if (guess > target) {
            console.log("Guess a bit low");
        } else {
            console.log("Guess a bit high");
        }
    }
}

function input3() {
    while (true) {
        const guess = parseInt(prompt("Guess a number between 0-1000: "));
        tryCount++; 
        
        if (guess === target) {
            console.log("You guessed it right!");
            return true;
        } else if (guess > target) {
            console.log("Guess a bit low");
        } else {
            console.log("Guess a bit high");
        }
    }
}

let correctGuess = false;
if (option.toUpperCase() === "A" || option.toLowerCase() === "a") {
    correctGuess = input1();
} else if (option.toUpperCase() === "B" || option.toLowerCase() === "b") {
    correctGuess = input2();
} else if (option.toUpperCase() === "C" || option.toLowerCase() === "c") {
    correctGuess = input3();
} else {
    console.log("Invalid option");
}

console.log("Number of attempts: " + tryCount);
