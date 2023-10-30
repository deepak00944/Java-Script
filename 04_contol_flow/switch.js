// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// let month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feburary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("defalut matched");
//         break;
// }

let month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feburary");
        break;
    case "march":
        console.log("March"); // if we remove break from here it will execute to the last except default
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("defalut matched");
        break;
}