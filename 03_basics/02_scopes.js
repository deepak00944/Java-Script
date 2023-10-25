// let a = 10
// const b = 20
// var c = 30

//anything out of if is global scope

var c = 300
if (true) { 
    //block scope
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); this is not printing
// console.log(b); // getting error
// console.log(c); // this is giving output and that is the reason we don not use this because it executes whether it is in global scope or block scope


// ***********scopes in  browser console and environment both are differents



//nested function

function one(){
    const username = "deepak"
    function two(){
        const website = "deepak.com"
        console.log(username); // this will be printed as it is in it's scope
    }
    // console.log(website); // this gives error because it is outside of it's scope
    two()
}
one()

if (true) {
    const username = "deepak"
    if(username == "deepak"){
        const website = " deepak.com"
        console.log(username + website)
    }
    // console.log(website); //this will give error
}

// console.log(username); //getting error

// ++++++++++++++++++interesting+++++++++++++++++++++++++++++


console.log(addone(5)); // getting output
function addone(num){
    return num  +1
}

// addone(5)


addTwo(5) //getting error beccause of diff method of declaration of function and this is called hoisting
const addTwo = function(){
    console.log("this is called expression")
}

// addTwo(5)