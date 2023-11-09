class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) //super keyword help us in gettingname form the user no need of call() method now 
        this.email = email
        this.password = password
    }

    courseAdd(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@email", 123)

chai.courseAdd()
chai.logMe()

const tea = new User('tea')
tea.logMe()
// tea.courseAdd()  error because user is inherited in teacher

console.log(tea instanceof User);
console.log(chai instanceof Teacher);
console.log(chai instanceof User); //true because teacher is instance of user
