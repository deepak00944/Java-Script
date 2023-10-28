const myObj = {
    js : "javascript",
    cpp : "C++",
    swift: "Swift by apple",
    rb:" ruby"
}

for (const key in myObj) {
    // console.log(key);
    console.log(`${key} is for ${myObj[key]}`); // to print value
}

let arr= ["js", "ruby", "java", "python"]

for (const key in arr) {
    console.log(`${key}, ${arr[key]}`);
}

// const map = new Map()
// map.set("IN", "India")
// map.set("UK", "United Kingdom")
// map.set("Fr", "France")
// map.set("IN", "India") //this will not repeat
// // console.log(map);


// for (const key in map) {
//     console.log(key);  // maps are not itratable 
// }

