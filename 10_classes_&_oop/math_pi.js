//We cannot change the value of PI because its is not writable, enumerable, ... and below is the way to get it

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descripter);

const chai = {
    name: 'ginger-chai',
    price: 25,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable:false,
    configurable:false
})

// chai.name = "tea"
// console.log(chai);

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== "function" ){
        console.log(`${key} : ${value}`);
    }
}

