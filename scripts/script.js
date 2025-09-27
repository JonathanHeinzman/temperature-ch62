console.log("Hello World from JS");

// Double slashes are for comments on a single line
/*
* This is a multiple line comment
* And i can use it to describe a function or even a file
*/

//console.log("This is a comment");

//Variables and Constants
// keyword nameVar = value;
// var, let and const

//Data Types
//Strings (text), Numerical and Boolean
// Strings are defined with '' or ""
var firstName = "Jonathan";
let lastName = 'Heinzman';

console.log(firstName);
console.log(lastName);

//Numbers
let myAge = 27;
let myHeight = 6.25;
let myAgeTwo = "27"; //This is a string and not a number

console.log(myAge);
console.log(myHeight);
console.log(myAgeTwo) 

//Boolean - True or False
let isProfessor = false;

// Display values in console
// Concatenation
console.log("My name is: " + firstName + " " + lastName + ", I'm " + myAge + " years old, my size is: " + myHeight);

// Arithmetic Operations: + - / *
let num1 = 10;
let num2 = 2;

let sum = num1 + num2; //Addition -> +
let sub = num1 - num2; //Subtraction -> - (Dash)
let mul = num1 * num2; //Multiplication -> * (Asterisc)
let div = num1 / num2; //Division -> / (foward slash)

console.log("The sum is: " + sum)
console.log("The sub is: " + sum)
console.log("The mul is: " + sum)
console.log("The div is: " + sum)