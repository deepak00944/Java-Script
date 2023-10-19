const score = 300;
console.log(score)

const newNumber = new Number(100.3920); 
console.log(newNumber);

console.log(newNumber.toString())
console.log(newNumber.toString().length) // we can use the strings method also 
console.log(newNumber.toFixed(2))
console.log(newNumber.toPrecision(4))

const hundreds = 100000000000
console.log(hundreds.toLocaleString("en-IN"));


//++++++++++++++++++++++++++++++++++++++++   Maths  +++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5)); //5
console.log(Math.round(3826.63089)); // 38227
console.log(Math.ceil(5.2));  // 6
console.log(Math.floor(5.9)) // 5
console.log(Math.min(3,6,2,8,2));
console.log(Math.max(7,3,6,9,2));

console.log(Math.random())
console.log((Math.random() * 10) +1);
console.log(Math.floor((Math.random() * 10) +1));

const max = 20
const min = 10

console.log(Math.floor((Math.random() *(max - min + 1)) + min))