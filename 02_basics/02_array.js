const marvel_heroes = ["spiderman", "thor", "ironman"]
const dc_heroes = ["flash", "superman", "batman"]

// marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); //[ 'spiderman', 'thor', 'ironman', [ 'flash', 'superman', 'batman' ] ]


//used to merge array
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes); //[ 'spiderman', 'thor', 'ironman', 'flash', 'superman', 'batman' ]


//used to merge two or more than two arrays
const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes);  //[ 'spiderman', 'thor', 'ironman', 'flash', 'superman', 'batman' ]

let another_array = [2,3,5, [2,5,6], 2, 3, [2,5,6, [5,9,6,7]]]
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // will be getting an array of merging all elements in them

console.log(Array.isArray("deepak"));
console.log(Array.from("deepak")); // convert in array; [ 'd', 'e', 'e', 'p', 'a', 'k' ]
console.log(Array.from({name:"deepak"})); //interesting


let score1 = 199
let score2 = 100
let score3 = 200
console.log(Array.of(score1,score2,score3))  //[ 199, 100, 200 ]