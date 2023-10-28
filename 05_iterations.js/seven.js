const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => num + 10)

const newNums = myNums  
                .map( (num) => num * 10)  //chaining 
                .map((num) => num + 1)
                // .map( (num) => num >= 40)// this will give the boolean values
                .filter( (num) => num >= 40) // give the exact value
                
console.log(newNums);
