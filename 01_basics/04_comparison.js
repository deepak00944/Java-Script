// console.log(2 > 1);
// console.log(2<1);
// console.log(2==2);
// console.log(2!=2);


// console.log("2">1);   //to compare the variables then it should be of same data type
// console.log("02">1)



// Avoid writing below code 

console.log(null>0);  //false
console.log(null == 0); //false
console.log(null >= 0);  //true


console.log(undefined>0);  //false
console.log(undefined == 0); //false
console.log(undefined >= 0);  //false



//  ^ comparison operator and equallity check both has different way of working in JS.
// Comparison Operetor convert null to the number, treats as 0. That's why (null>= 0) is true and (null < 0) is false.


// ===  ->  used for strict check; means it checks for the data type also. 

console.log("2" === 2); //false