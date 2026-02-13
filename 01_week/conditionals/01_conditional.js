/******************* Conditional Statements (if, else if, else) *****************/

let color = "pink";

// if statement:
// Yah single condition ko check karta hai.
// Agar condition true hoti hai to if block execute hota hai.
if (color === "red") {
    console.log(`${color} :- is a primary color.`);
}

// else if statement:
// Yah multiple conditions ko check karne ke liye use hota hai.
// Jab pehli condition false ho jati hai tab next condition check hoti hai.
else if (color === "blue") {
    console.log(`${color} :- is a primary color.`);
} 
else if (color === "yellow") {
    console.log(`${color} :- is a primary color.`);
} 

// else statement:
// Jab if aur else if me koi bhi condition match nahi hoti,
// tab default block execute hota hai.
else {
    console.log(`${color} :- is not a primary color.`);
}
