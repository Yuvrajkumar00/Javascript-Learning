/*************************************************
                    SHIFT METHOD
*************************************************/

// Removes the FIRST element from the array

// Mutates the original array

// Takes: nothing

// Returns:
// • The removed element (was at index 0)
// • undefined if array was empty

let colors = ["red", "green", "blue"];
let first = colors.shift();

console.log(colors);  // ["green", "blue"]
console.log(first);   // "red"

// Important things:

// 1. Slower than pop() — because all remaining elements must be shifted left (O(n))

// 2. Opposite / pair → unshift()  (add to beginning)

// 3. Common mistake: expecting the new array
let wrong = ["a","b"].shift();  // wrong = "a" (string), not ["b"]

// 4. Often used in queue-like structures (FIFO)

// 5. Immutable alternatives (preferred in modern code):
let original = [10,20,30,40];
let withoutFirst = original.slice(1);          // [20,30,40]
let firstItem    = original[0];                // 10
// or
let [first1, ...rest] = original;               // first = 10, rest = [20,30,40]