const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}


const greet = "Hello World!"
for (const greetings of greet) {
    // if (greetings==" ") {
    //     continue
    // }
    // console.log(greetings);
}


//Map -> map is object which holds key vlaue pair and remember the original insertion order of key duplicate value nhi milti unique hoti h 

const map = new Map()
map.set("IN", "India")
map.set("UK", "United Kingdom")
map.set("Fr", "France")
map.set("IN", "India") //this will not repeat
console.log(map);


for (const [key , value] of map) {
    console.log(key,":-",value);
}




//will give error not a correct to iterate object
const myObj = {
    game1: "BGMI",
    game2: "Clash of clan"
}

for (const [key, value] of myObj) {
    console.log(key,value);
    
}