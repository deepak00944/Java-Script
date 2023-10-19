const name  = "deepak"
let count = 21

// console.log(name, count, " hello") 

// use backtikcs(` `)

console.log(`Hii my name is ${name}, count is ${count}`)

//we can declare the strings by this way also

const gameName = new String("deepak-ds-jsk")
const url = "https://deepak.com/deepak-10"
const spaceVar = "     kyaaa hai          "

console.log(gameName.anchor("hiihello"))  //<a name="hiihello">deepakds</a>
console.log(gameName.at(3)); //p
console.log(gameName.big()) //<big>deepakds</big>
console.log(gameName.bold()) //<b>deepakds</b>
console.log(gameName.slice(0,5)) //deepa
console.log(gameName) //[String: 'deepakds']
console.log(gameName[0]); // d
console.log(gameName.__proto__);
console.log(gameName.length);//13
console.log(gameName.toUpperCase());//DEEPAK-DS-JSK
console.log(gameName.split("-")) //[ 'deepak', 'ds', 'jsk' ]
console.log(gameName.substring(2,8)); ///epak-d
console.log(gameName.replace("d","p"))//peepak-ds-jsk
console.log(gameName.replaceAll("d","p")) //peepak-ps-jsk
console.log(url.includes("deepak")) // true
console.log(spaceVar.trim()) //kyaaa hai; removes the white sapce after and before the  string
console.log(gameName.strike()) //<strike>deepak-ds-jsk</strike>