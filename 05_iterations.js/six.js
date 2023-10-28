// const coding = ["pyhton", "js", "ruby", "cpp",  "java"]

// coding.forEach( (item)=>{
//     // console.log(item);
//     return item
// } )   // foreach doesnot return the values


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter( (num)=> num>5)   //immplicitly return

// const newNums = myNums.filter( (num)=> {  //filter returns the value or return likhna hoga
//     return num>4  
// })

// const newNums = []
// myNums.forEach( (num)=>{  // we can do this by forEach also
//     if (num>5) {
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [

    {
        "name": "To Kill a Mockingbird",
        "published_date": "1960",
        "genre": "Fiction",
        "edition": "2007",
    },
    {
        "name": "1984",
        "published_date": 1949,
        "genre": "Dystopian",
        "edition": 2008,
    },
    {
        "name": "Pride and Prejudice",
        "published_date": 1813,
        "genre": "Classic",
        "edition": 2004,
    },
    {
        "name": "The Catcher in the Rye",
        "published_date": 1951,
        "genre": "Coming-of-Age",
        "edition": 2000,
    },
    {
        "name": "The Great Gatsby",
        "published_date": 1925,
        "genre": "Classic",
        "edition": 2003,
    },
    {
        "name": "Harry Potter and the Sorcerer's Stone",
        "published_date": 1997,
        "genre": "Fantasy",
        "edition": 2004,
    },
    {
        "name": "The Hobbit",
        "published_date": 1937,
        "genre": "Fantasy",
        "edition": 2000,
    },
    {
        "name": "The Hunger Games",
        "published_date": 2008,
        "genre": "Science Fiction",
        "edition": 2015,
    },
    {
        "name": "The Da Vinci Code",
        "published_date": 2003,
        "genre": "Mystery",
        "edition": 2009,
    },
    {
        "name": "The Shining",
        "published_date": 1977,
        "genre": "Horror",
        "edition": 2018,
    }
]


let userBooks = books.filter( (bk) => bk.genre === "Horror")
userBooks = books.filter( (bk) => {
    return bk.published_date>2000 && bk.genre === "Science Fiction"
})
console.log(userBooks);