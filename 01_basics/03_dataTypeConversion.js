let  score = "deepak"

// console.log(score); 
// console.log(typeof score); // String

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber)  //  NaN

/*When the values  of score changes then following are the output:
    "33" => 33; 
    "deepak" => NaN
    true => 1; false => 0;

    Output will be Number
 */


let  isLoggenIn = "hitesh";

console.log(typeof isLoggenIn);
let booleanIsLoggedIn = Boolean(isLoggenIn);

console.log(booleanIsLoggedIn) // instead of 1 it will be "true"
console.log(typeof booleanIsLoggedIn); // boolean

/*
    "hitesh" =>  true
    "" => false 
    1 => true
    0 => false
*/


let anyNumber = 33;

let stringNumber = String(anyNumber);

console.log(stringNumber);
console.log(typeof stringNumber); // string


var sym = Symbol("hello")
console.log(sym);


// *******************OPERATIONS*****************************

let value = 44
let negValue = -value
console.log(negValue);

let str1 = "Hello"
let str2  = " Deepak"
let  str3 = str1 + str2
console.log(str3)

console.log(1 + "2")
console.log("1" + 2)
console.log("1" + 2 + 3)
console.log(1 + "2" + 3)
console.log(1 + 2 + "3") // in this case fist the addition will happen

console.log(+true);  // tricky conversion
console.log(+"");

let gameCounter  = 100;
//prefix and postfix operator; mdn
//prefix => increments and returns the value after incrementing
//postfix => increments and returns the value before incrementing
gameCounter++;
++gameCounter;
console.log(gameCounter)
