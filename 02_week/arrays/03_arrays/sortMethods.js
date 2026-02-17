/*************************************************
                SORT METHOD
**************************************************/ 

// Original arrays
let fruits = ["banana", "apple", "mango", "grapes"];
let numbers = [100, 25, 3, 40];


// 1️⃣ Default sorting (Strings → works correctly)
fruits.sort();  
console.log("Sorted fruits (default):", fruits);
// Output: ["apple", "banana", "grapes", "mango"]


// 2️⃣ Default sorting (Numbers → WRONG behavior)
numbers.sort();  
console.log("Numbers sorted by default:", numbers);
// Output may be: [100, 25, 3, 40]
// Reason: Numbers are treated as STRINGS


// 3️⃣ Correct sorting for numbers (Ascending order)
numbers.sort(function(a, b) {
    return a - b;   // Negative → a comes first
});
console.log("Numbers sorted ascending:", numbers);
// Output: [3, 25, 40, 100]


// 4️⃣ Sorting numbers (Descending order)
numbers.sort(function(a, b) {
    return b - a;   // Reverse comparison
});
console.log("Numbers sorted descending:", numbers);
// Output: [100, 40, 25, 3]


// 5️⃣ Return value of sort()
let result = numbers.sort((a, b) => a - b);

console.log("Returned value:", result);  
console.log("Original array after sort:", numbers);

// Important:
// sort() modifies the original array
// and returns the SAME array reference
