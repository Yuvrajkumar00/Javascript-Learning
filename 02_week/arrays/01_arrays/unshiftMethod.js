/*************************************************
                    UNSHIFT METHOD
*************************************************/

// Adds one or more elements to the BEGINNING of the array

// Mutates the original array

// Takes:
// • 1 or more elements

// Returns:
// • The new length of the array

let nums = [30, 40, 50];
let newLen = nums.unshift(10, 20);

console.log(nums);    // [10, 20, 30, 40, 50]
console.log(newLen);  // 5

// Important interview points:

// 1. Slower than push() — O(n) time (all elements must shift right)

// 2. Opposite / pair → shift()

// 3. Same mistake as push: people think it returns the array
let wrong = [5,6].unshift(1,2,3,4);   // wrong = 6 (length), array is changed

// 4. Can add multiple items at once (like push)

// 5. Modern immutable way (preferred today):
let original = [3,4,5];
let newArray = [1, 2, ...original];    // [1,2,3,4,5]