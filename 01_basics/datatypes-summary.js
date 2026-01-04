// Premitive

// 7 Types : String , Number , boolean , null , undefined , Symbol , BigInt

const score = false
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 46234234624923467n

// Reference (Non Premitive) 

// Arrays, Object, Fuctions

const heros = ["shaktiman","nagraj","doga"]

let myObj = {
    name : "Dipak",
    age : 19
}

const myFunction = function() {
    console.log("Hello World");   
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);