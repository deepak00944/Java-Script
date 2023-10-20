// arrays-copy operation shallow  copies share karte hai; Shallow copy of an object is a copy whose properties share the same reffrence point. Deep copy nhi karta.

//array

const myArr = [1,3,5,1,5]
const myHeroes = ["shaktiman", "Nagaaraj"]

const myArr2 = new Array(1,4,5,3,2)
// console.log(myArr[1])

// ..Array methods

myArr.push(8);// to add the values
myArr.push(9);
myArr.pop()  //removes the last value

myArr.unshift(0) // add the value in the start of array; 
myArr.shift() // remove the value from the start of array; 

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(8))

// const newArr = myArr.join(); // add all the elemts as string

// console.log(myArr);
// console.log(newArr);

console.log("A ", myArr);

const myN1 = myArr.slice(1,5)
console.log(myN1)

console.log("B ", myArr);

const myN2 = myArr.splice(1,5) 
console.log(myN2);
console.log("C ", myArr);

// slice or splice mai ye difference hai ki jab hum slice karte h toh original array change nhi hota lekin jab splice karte h toh original arrya change hota h 