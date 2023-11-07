// ##Promises
// Promises object represents eventual completion (or failure) of an asynchronous operation and its resulting value
// "jo task promise ko diya gaya h vo queue mai lagne ke baad immediate complete nhi hota vo "
//History --> Q or BLue bird 
// Performance of promise native is higher or better then the Q or BLue bird although memory consuption is also high in case of promises 
// call back hail ko reduce karta h 

//Creating Promises

const promiseOne = new Promise(function(resolve,reject){
    //Do the Async task
    //Network, DB, cryptogaphy 
    setTimeout(function(){
    console.log("Async task is completed");
    resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise comsumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log();
        resolve({username:"deepak", email:"deepak@gamil.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false;
        if (!error) {
            resolve({username: "Deepak", age: 19})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username); // this is called chaning in this the above then value is passed to next one
})
.catch((err) => {
    console.log(err);
})

//Same thing with different method Sync - await

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        const error = true
        if (!error) {
            resolve({username:"javascript", password:"1223"})
        } else {
            reject("Error: js went wrong")
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function allUserdata(){
//     try {
//         const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// allUserdata()

fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(resolve){
    return resolve.json()
})
.then((data)=>{
    console.log(data);
})
.catch(function(error){
    console.log(error);
})



