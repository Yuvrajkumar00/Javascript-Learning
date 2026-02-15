/*************************************************
                SLICE METHOD
*************************************************/

// Returns a shallow copy of a portion of the array

// Does NOT mutate the original array

// Takes:
// • start (inclusive, default 0)
// • end   (exclusive, default arr.length)
// Can use negative indices (from the end)

// Returns:
// • New array with the selected elements

let animals = ['cat', 'dog', 'bird', 'fish', 'lion'];

let some = animals.slice(1, 4);      // ['dog','bird','fish']
let from2 = animals.slice(2);        // ['bird','fish','lion']
let last2 = animals.slice(-2);       // ['fish','lion']
let copy  = animals.slice();         // full shallow copy

console.log(animals); // original unchanged

// Important interview points:

// 1. Negative indices are allowed and very useful
// 2. slice() is the classic way to create a shallow copy
// 3. slice(0) or slice() → full copy
// 4. Does NOT include the end index (like substring)
// 5. Modern alternative: spread operator
let copy2 = [...animals];            // same shallow copy