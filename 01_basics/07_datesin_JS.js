//Dates

const myDate = new Date()
console.log(myDate)


console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);// object

//Manually we can write thats

// const myCreatedDates = new Date(2023, 0, 12);
// const myCreatedDates = new Date(2023, 0, 12, 5, 3 );
// const myCreatedDates = new Date("01-12-2003");
// console.log(myCreatedDates.toLocaleString());

// let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDates.getTime())
// console.log(Math.floor(Date.now()/1000)) // to convert in seconds


let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMilliseconds())
console.log(newDate.getMonth() +1)

console.log(newDate.toLocaleString('default', {
    weekday:"long",
    day:"2-digit" // suggestions ctrl + space
}))