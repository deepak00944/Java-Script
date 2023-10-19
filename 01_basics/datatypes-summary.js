/* JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime. */


// Data ko kis tarah se memory mai rakha jaata hai or kis tarah se access kiya jaata h uske bassis par data types are divided in two types 
// Primitive dataypes and  Refrence (Non- primitive) data types 


// 1.Primitive  //Ye call by value hote h hume iski copy dii jaati jisme hum changes karte h 
// There are 7 types of Primitive data types: String, Number, Boolean, null, undefined , Symbol, bigInt

const  score = 100;
const scoreValue = 100.2

const isLoggenIn = false 
console.log(typeof isLoggenIn); //boolean

const outsideTemp = null;
console.log(typeof outsideTemp); // object ****

let userName;
console.log(typeof userName); // undefined 

const  id = Symbol("123");
const anotherId = Symbol("123")
console.log(typeof anotherId); //symbol

console.log(id == anotherId); //this must be false

const bigNumber = 28914451273893212313n
console.log(typeof bigNumber); // bigInt

// 2. Refrence type / Non Preimitive
// Array, Objects, Functions 

const heros = ["Shaktiman", "nagaraaj", "doga"] 
console.log(typeof heros); // object


const myObj = {
    name:"Deepak",
    age: 20
}
console.log(typeof myObj); // object


const myFunction = function(){
    console.log("Hello wolrd")
}
console.log(typeof myFunction); //function but it is actually a function object 


// Return typeof variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory
//  Stack(Primitive); we will be having a copy of memory and Heap(Non primitive); having the  refrence value of memory

//Example

let myYoutubeName = "hiteshchoudhary"
let anotherName = myYoutubeName
anotherName = "chaiaurcode" 

console.log(myYoutubeName);
console.log(anotherName); // output will be cahiaurcode which shows that it doesnot cahnge in the refrence value they only provide the copy of that and that is what we call stak memory.

//Non primitive  example

let userOne = {
    email: "userone@google.com",
    age:23
}

// console.log(userOne)

let userTwo = userOne

userTwo.email = "hitessh@google.com"

console.log(userTwo.email) 
console.log(userOne.email)// output of both will be same which shows that we have the refrence value of this and the cahnges made in the refrence value and this is what we called Heap memory.

