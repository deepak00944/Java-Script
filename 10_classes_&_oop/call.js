function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this,username)  //ye bina call() ke call hota h lekin call hote hi bhar ho jaata h jsike karan vash uske koi bhi variable execute nhi ho paate toh unhe hold karne ke liye hum call() ka  use karte h lekin abhi bhi vo variable ka context dena hoga jiske liye hum use kar rhe h toh uske liye hum 'this' ka use kar rhe h ..... 

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@google.com", 123)
console.log(chai);