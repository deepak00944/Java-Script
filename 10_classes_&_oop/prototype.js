// let myName = "Deepak      "
// console.log(myName.trueLength());

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor:"hammer",
    spiderman: 'sling',

    getPower: function(){
        console.log(`Power of spiderman is ${this.spiderman}`);
    }
}

// console.log(heroPower.getPower());

Object.prototype.deepak = function (){
    console.log("this is accessible to all");
}

Array.prototype.heydeepak = ()=>{
    console.log("it should be accessible to array only");
}

// heroPower.deepak()
// myHeros.deepak()
// myHeros.heydeepak()
// heroPower.heydeepak()

const Teacher = {
    makeVideo: true
}

const TASupport = {
    makeAssignment: "jsAssignment"
}

const TeachingSupport = {
    isAvailable: true,
    __proto__: TASupport
}


//How we can inherit
Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport.makeVideo)



// SOmething interesting 
let anotherUser = "chaiAurCode"

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUser.trueLength()

"deepak ".trueLength()