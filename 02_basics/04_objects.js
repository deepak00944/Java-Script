// const tinderUser = new Object(); // singleton object hai
const tinderUser = {}; //ye non singleton hai

tinderUser.name = "Deepak"
tinderUser.id = 29
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"deepak@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Deepak",
            laastname:"Singh"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

let obj1 = {1:"a", 2:"b"};
let obj2 = {3:"a", 4:"b"};

// let obj3 = {obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2) // to merge the objects

// let obj3 = {...obj1, ...obj2} // (...)spread operator 
// console.log(obj3); 

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // [ 'name', 'id', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 'Deepak', 29, false ]
console.log(Object.entries(tinderUser)); // [ [ 'name', 'Deepak' ], [ 'id', 29 ], [ 'isLoggedIn', false ] ]

//to check wheather we have the property or not

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // is yes then it will  print true


//object de-structure

const course = {
    courseInstructure:"hitesh",
    coursenama: "js in hindi",
    courseprice: 999
}

// course.courseInstructure

const {} = course // this is the syntax  for de-structure
const {courseInstructure} = course // this is how we declare the keys
const {courseInstructure:instructure} = course // this is how we shortend the name

console.log(courseInstructure);