// if


// let temp = 41
// if (temp<50){
//     console.log(`Temp is less than 50`);
// }else{
//     console.log(`Temp is not less than 50`);
// }

// let score = 200
// if (score>100) {
//     var power = 'fly'
//     // let power = 'fly'
//     console.log(`user power: ${power}`);
// }

// // console.log(`user power: ${power}`); //power is not defined
// console.log(`user power: ${power}`); //it will execute if we use var that is why we dont use it 



// shortend way to  write in general we do not write this because it is non readalbe code
// const balance = 1000;
// if(balance>500) console.log("test"), console.log("test2"); //semicolone is neccessary to break the scope



// const balance = 1000;

// if (balance<500) {
//     console.log('balance is less than 500');
// }else if (balance<700) {
//     console.log('balance is less than 700');
// }else if (balance<900) {
//     console.log('balance is less than 900');
// }else{
//     console.log('balance is less than 1200');
// }


const userLoggedIn = true
const debitcard = true
const userLoggedInFromEmail = true
const userLoggedInFromGoogle = true
const guestUser = true
if (userLoggedIn && debitcard) {   // && this is AND logical operator each condition shld be right
    console.log("allow  to buy courses");
}

if (userLoggedInFromEmail || userLoggedInFromGoogle || guestUser) { // ||  this is OR operator in this case atleast one condition shld be right
    console.log("user logged in");
}