class User{
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `abc${this.username}@$%^`;
    }

    changeUsernam(){
        return this.username.toUpperCase();
    }
}

const chai = new User("chai", "chai@gamil.com", 12)
console.log(chai.encryptPassword());
console.log(chai.changeUsernam());

//behind the scene

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `abc${this.username}@$%^`;
// }

// User.prototype.changeUsernam = function(){
//     return this.username.toUpperCase();
// }

// const tea = new User("tea", "chai@gamil.com", 12)
// console.log(tea.encryptPassword());
// console.log(tea.changeUsernam());

