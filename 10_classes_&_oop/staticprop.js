class User{
    constructor(username ){
        this.username = username 
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  //static property stops to give the access  of the method 
        return 123;
    }
}

const deepak = new User("deepak")
// console.log(deepak.createId())


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email =email
    }
}

const jahtu = new Teacher("jhaa", "jha@excellence")
jahtu.logMe()
console.log(jahtu.createId())  //again that wont be accessable