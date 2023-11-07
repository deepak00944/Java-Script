// Object Literal

const user = {
    username:"deepak",
    loggedInCount: 23,
    isLoggedIn: true,

    userDetails: function(){
        // console.log(this);
        console.log("got the users detail");
    }

};

// const userOne = user
// console.log(userOne.userDetails());

// If we want ke ye hum dusre user ke liye kare toh humne pura likhna hoga firse isi karan we use constructor function that is new

// new -->
//Step-1 naya intance create hota h (copy de deta h)
// 2- constructor function call hota h new kyeword ke karan
// 3- this keyword ke saare argumnet inject ho jaate h
// 4 - we got that in function 

function User(username, loggedInCount, isLoggedIn){
    this.username = username;
    this.loggedInCount = loggedInCount;
    this.isLoggedIn = isLoggedIn

    return(this)
}

const userOne = new User("deepak", 23, false)
// const userTwo = User("naresh",  13, false) //this will overwrite 
const userTwo = new User("naresh",  13, true) 

// console.log(userOne);
console.log(userOne.constructor); // refrence hota h khud hi ke baare m, matalb us  function ke baare m 
console.log(userTwo);
console.log(userTwo instanceof User);

//instance of