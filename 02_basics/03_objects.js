// singleton;   jabbhi hum object constructor se banate h toh singleton nhi banta or jab literal se banate h toh singleton ban jata h
// Object.create

// object literals

let mySym = Symbol("key1")

const jsUser = {
    name: "Deepak", // the keys here are in string type
    "full name": "Deepak Singh",
    age: 18,
    email: "deepak@gmail.com",
    [mySym]: "myKey1",//********when someone ask to write a key which should be symbol (declare var -> use brackets in key).
    lastLoginDays: ["Wed", "Sat","Sun"]
}

console.log(jsUser.name);
console.log(jsUser[mySym]); // have to keep in square brackets
console.log(jsUser["lastLoginDays"]); // another approach and kind of right approach ********* 
console.log(jsUser["full name"]); // In this case "." this does not work that's why we have to use "[ ]"  one more thingwe need to keep the variable in double quotes because they are strings

//to change the values

jsUser.email = "deepak@yahoo.com"
// console.log(jsUser);

// If we want that no one can change the values we can freeze it
// Object.freeze(jsUser)
jsUser.email = "deepak@google.com" // this will not propogate
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log((`Hello JS user, ${this.name}`)); // when we are doing same refrence we can use this
}
// console.log(jsUser.greeting); //[Function (anonymous)]
console.log(jsUser.greeting()); // Hello JS user
console.log(jsUser.greetingTwo());  //Hello JS user, Deepak
