const User ={
    _email:"deepak@hdfc",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

let chai = Object.create(User)
console.log(chai.email);