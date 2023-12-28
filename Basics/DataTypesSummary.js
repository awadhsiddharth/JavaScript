// Primitive Types
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreVlue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 5578676897987878789n


// Non Primitive(Reference Types)
// Array, Objects, Functions
const heroes = ["shaktiman", "nagraj","doga"] // Array

// Objects
let myObje = {
    name:"Vivek",
    age:22
}

// functions using variable

const myFunction = function(){

    console.log("Hi");
}


console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Number);
console.log(typeof Boolean);
console.log(typeof String);