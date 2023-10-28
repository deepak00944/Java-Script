const coding = ["pyhton", "js", "ruby", "cpp",  "java"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function  Printme(item){
//     console.log(item);
// }

// coding.forEach(Printme)

// coding.forEach( (val, index, array)=>{
//     console.log(val, index,array);
// } )

const mycodding = [
    {
        lanuageName: "java script",
        filename: "js"
    },
    {
        lanuageName: "Python",
        filename: "py"
    },
    {
        lanuageName: "C++",
        filename: "cpp"
    }
]

mycodding.forEach( (item)=>{
    console.log(item.lanuageName);
} )