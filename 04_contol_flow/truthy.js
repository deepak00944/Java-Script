// falsy value
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN       (remaining  are truthy values)

//truthy values
// "0", 'false'," ", [], {}, function(){}


//this is how you can check this
const userEmail = []
if (userEmail.length == 0) {
    console.log("Array is empty");
}

const emptyObject = {}
if ((Object.keys(emptyObject)).length == 0) {
    console.log("Object is empty");
}

// false == 0 //true 
// false == "" //true
// 0 == '' //true


//Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 5 ?? 10 //5
val1 = null ?? 10 //10   // ??used to check the saftey whether the value is null or not
val1 = undefined??15
val1= null ?? 10 ??15  //10

console.log(val1);


//ternary operator

// condition ? true: false

let iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80"); 