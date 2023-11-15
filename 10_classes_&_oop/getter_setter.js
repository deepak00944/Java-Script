class User{
    constructor(email,password){
        this.email = email,
        this.password= password
    }

    get password(){
        return this._password.toUpperCase() // this will retun the password in upper case
    }

    set password(value){
       this._password = value
    }
}

const chai = new User("deepak@gmail","abc")
console.log(chai.password);