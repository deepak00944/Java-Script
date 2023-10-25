// Immediatly Invoked Function Expressions (IIFE)

//why  iife? ==>> global pollution ko kam karne ke liye means jo bhi vha declaration wagera h unse dikkat na ho isliye we use iffe

(function chai(){
    // named iife
    console.log("DB connected");
})();   //in iffe we have to add semicolne explicitly at last to end that function 

(()=>{
    console.log(`DB connected 2`);
})();

((name)=>{
    console.log(`DB connected 2, ${name}`);
})('deepak');