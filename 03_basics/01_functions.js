//Simple defination of function

// function addTwoNum(num1, num2){
//     console.log(num1 + num2);  
// }
// addTwoNum(2,3)

// function addTwoNum(num1, num2){   // value in paranthesis are called parameteres 
//     // let result = num1+num2
//     // return result  //usingthis we can return the value which helps in storing value 
//     return num1+num2
// }

// console.log(addTwoNum(4,3)) // value in parentesis are called arguments


function userLogginMessage(username){  // we can give defalut values to the username here only
    // if(username === undefined){
    //     console.log("Please Enter username");
    //     return
    // }
    if(!username){
        console.log("Please Enter username");
        return
    }
    return `${username} logged in`
}

// console.log(userLogginMessage("deepak"));
// console.log(userLogginMessage("")); //"logged in";  empty means false
console.log(userLogginMessage()); //in this case this will  print "undefined" to prevent this we will use "if"



//many times we see  the carts in e-commerce websites toh we dont know kitne arguments aane waale h and we cannot decide ke  hume kitne parameters dena hai uske liye here we go...

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(123, 300, 100)) // the values will be return in array

function calculateCartPrice(val1, val2, ...num1){  // important*********8
    return num1
}
console.log(calculateCartPrice(123, 300, 100,1000,2000)) // the starting two value will bw stored in val1 and val2 and rest in array 

//we can pass objects and array in functions

const userObj = {
    username: "deepak",
    price:300
}

function handelObj(anyobj){
    return `Username is ${anyobj.username} and the price is ${anyobj.price}`
}

console.log(handelObj(userObj))

// console.log(handelObj({  // We can pass the object in this way also 
//     username:"hitesh",
//     price:2000
// }))

//array

const myArray = [200, 330, 500, 400]

function handelArray(getArray){
    return getArray[3]
}

console.log(handelArray(myArray))

// console.log(handelArray([200,440,299,23])); // in this way also we can pass array
