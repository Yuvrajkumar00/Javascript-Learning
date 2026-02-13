/******************* Switch Statement *****************/

// Switch statement ka use multiple values ko compare karne ke liye hota hai.
// Yah if-else if ladder ka cleaner alternative hai jab ek hi variable ko
// different values se compare karna ho.

const month = 11;

switch (month) {

    // case:
    // Yah value ko match karta hai.
    // Agar case match ho jata hai to uska block execute hota hai.

    case 1:
        console.log("January");
        break; // break ka use execution ko yahin stop karne ke liye hota hai.

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    // default:
    // Jab koi bhi case match nahi hota tab default block execute hota hai.
    default:
        console.log("Not a valid month.");
        break;
}
