// Comment 
//console.log('Hello!');

// Declaring a variable

// let name = 'James';

// console.log(name); < - its like print in python

// Rules for naming variables

// 1. Cannot be a reserved keyword

// 2. Should be meaningful

// 3. Cannot start with a number (1name)

// 4. Cannot contain a space or hyphen(-)

// Are case-sensitive

// let firstName = 'James', lastName = 'Lin';

// let FirstName;

let name = 'James'; // String Literal

let age = 21; // Number Literal

let isApproved = false; // Boolean Literal

let firstName = undefined;

let lastName = null;

let selectedColor = null; // Clears the value of the variable

// Person object

let person = {
    name: 'James',
    age: 21
};

// Dot Notation (to change value of variables) [Cleaner and easier]

person.name = 'John';

// Bracket Notation (to change value of variables)

let selection = 'name';

person[selection] = 'Jay';

console.log(person.name);


// let lastName = 'Lin';

// let - reassign variable

// const - don't need to reassign variable

let interestRate = 0.3;

interestRate = 1;

console.log(interestRate);

typeof name

// Arrays

// An Array is a data structure that we use to represent a list of items.

let selectedColors = ['red', 'blue']; // Array Literal (an empty array)
selectedColors[2] = 1;
console.log(selectedColors);

// Functions

function example() {

    // inside the brackets is where the parameters are put
    // between these curly braces is the body of this function
}

// Performing a task

function greet(name, lastName) {

    console.log('Hello ' + name + ' ' + lastName);

}

greet('J', 'Lin'); // to run the function, function call 1
greet('Bro'); // function call 2

// Calculating a value

function square(number) {

    return number * number;

}

let number = square(2);

console.log(number); // function call 3

console.log(square(3)); // function call 4

// A function is set of statements that either performs a task or calculates/returns a value