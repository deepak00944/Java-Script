const user = {
    username: "deepak",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this); //this will give empty parantesis 

//****************** browser ke andar jo global object h vo window h  

// function chai(){
//     console.log(this.username);
//     console.log(this);
// }

// chai()

// const chai = function (){
//     let username= "deepak"
//     console.log(this.username);
//     console.log(this);
// }
// chai()


const chai = () => {
    let username= "deepak"
    console.log(this.username);
    console.log(this); //empty object 
}
// chai()


//arrow function 

// let addTwo = (num1, num2)=> {
//     return num1+num2  // explicit return
// }
// console.log(addTwo(3,6));

// let addTwo = (num1, num2)=> num1 + num2  //implicit return no need to write return
// console.log(addTwo(3,6));


// let addTwo = (num1, num2)=> (num1 + num2)  //implicit return no need to write return no need   of curlie braces

let addTwo = (num1, num2)=> (num1 + num2, {username:"deepak"})  //we can use object in this way
console.log(addTwo(3,6));

