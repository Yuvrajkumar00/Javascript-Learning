/*************************************************
                    POP METHOD
*************************************************/

// Removes the LAST element from the array

// Mutates the original array

// Takes:
// • nothing (no arguments)

// Returns:
// • The removed element (whatever was at the end)
// • undefined if the array was empty

let arr = [10, 20, 30, 40];
let removed = arr.pop();

console.log(arr);     // [10, 20, 30]
console.log(removed); // 40

// Empty array case
let empty = [];
let nothing = empty.pop();
console.log(nothing); // undefined
console.log(empty);   // still []

// Important interview points:

// 1. Very fast — amortized O(1)  (same as push)
 
// 2. Opposite / pair → push()  (add to end)

// 3. Common mistake: thinking it returns the new array
let wrong = [1,2,3].pop();   // wrong = 3 (the number), not [1,2]

// 4. Safe to call on empty array (no error, just returns undefined)

// 5. Modern immutable alternative (when you don't want to mutate):
let original = [1,2,3,4];
let withoutLast = original.slice(0, -1);   // [1,2,3]
let lastItem    = original.at(-1);         // 4 (or original[original.length-1])

// Bonus: can be used in a loop to empty array (but not recommended)
while (arr.length > 0) {
  arr.pop();
}