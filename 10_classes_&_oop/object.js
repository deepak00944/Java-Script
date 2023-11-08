function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)
// above function shows that it acts as a object 

function createUser(username,score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function(){
        this.score++;
        console.log(this.score);
    
}

createUser.prototype.printMe =function(){
    console.log(`The price is ${this.score}`); // using this to show the context jiske liye uska use kar rhe h
}

const chai = new createUser("chai", 25) 
const tea = new createUser("tea", 250) 

chai.printMe()
tea.increment()