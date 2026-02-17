/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        for...of  LOOP  —  Quick Revision Notes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

// Creates a NEW array by applying a function to EVERY element of the original array

// Does NOT mutate the original array (non-destructive / immutable)

// Takes:
// • A callback function: (element, index?, array?) => newValue
//   - element: current item
//   - index: optional (position of current item)
//   - array: optional (the original array)
// • Optional thisArg (rarely used)

// Returns:
// • A new array containing the results of calling the callback on each element
// • Same length as original array (always!)

// ────────────────────────────────────────────────
// Basic Examples
// ────────────────────────────────────────────────

// 1. Simple transformation
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]  ← original unchanged

// 2. With index (very common in interviews)
const indexed = numbers.map((num, index) => `${index + 1}. ${num}`);
console.log(indexed);
// ["1. 1", "2. 2", "3. 3", "4. 4", "5. 5"]

// 3. Real-world: formatting data
const users = [
  { id: 1, name: "ram" },
  { id: 2, name: "shyam" },
];

const upperNames = users.map((user) => user.name.toUpperCase());
console.log(upperNames); // ["RAM", "SHYAM"]

// ────────────────────────────────────────────────
// map() vs forEach() (very common interview comparison)
// ────────────────────────────────────────────────

// Your example code:
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map way (clean & preferred)
const newNumsMap = myNumers.map((num) => num + 10);
console.log(newNumsMap); // [11,12,13,14,15,16,17,18,19,20]

// forEach way (mutates a new array manually)
let myNumer = [];
myNumers.forEach((num) => myNumer.push(num + 10));
console.log(myNumer); // same result

// Key Differences:

/*
Feature                  | map()                              | forEach()
─────────────────────────┼────────────────────────────────────┼───────────────────────────────
Returns                  | New array                          | undefined
Creates new array?       | Yes (automatically)                | No (you must create & push)
Chainable?               | Yes (.map().filter()...)           | No
Purpose                  | Transform each element → new array | Side effects (console.log, push, etc.)
Interview preference     | Much higher (functional style)     | Lower (imperative style)

Rule:  
Use **map()** when you want to **transform** elements and get a new array.  
Use **forEach()** when you just want to loop and do side effects (no return value needed).
*/

// ────────────────────────────────────────────────
// Chaining map() + map() + filter() (very common in interviews)
// ────────────────────────────────────────────────

// Your excellent example:
const newNums = myNumers
  .map((num) => num * 10) // [10,20,30,...,100]
  .map((num) => num + 1) // [11,21,31,...,101]
  .filter((num) => num >= 40); // [41,51,61,71,81,91,101]

console.log(newNums);
// → [41, 51, 61, 71, 81, 91, 101]

// Why chaining works: each method returns a new array → can call next method

// Very common interview task:
const data = [1, 2, 3, 4, 5, 6, 7];
const result = data
  .filter((n) => n % 2 === 0) // [2,4,6]
  .map((n) => n * 3) // [6,12,18]
  .map((n) => n + 10); // [16,22,28]

console.log(result); // [16, 22, 28]

// ────────────────────────────────────────────────
// Important things people forget / get asked in interviews
// ────────────────────────────────────────────────

// 1. map() ALWAYS returns an array of the same length
//    → Even if you return nothing → gets undefined
const test = [1, 2, 3].map(() => {}); // [undefined, undefined, undefined]

// Returning object literals in arrow functions – common trap

// Wrong: curly braces without return → seen as block/label → undefined
const wrong = [1, 2].map((num) => {
  id: num;
});
// → [undefined, undefined]

// Correct implicit return: wrap object in parentheses
const correctImplicit = [1, 2].map((num) => ({ id: num }));
// → [{id:1}, {id:2}]

// Correct explicit return: no parentheses needed around object
const correctExplicit = [1, 2].map((num) => {
  return { id: num };
});
// → [{id:1}, {id:2}]

// 3. Performance: O(n) — very fast, but avoid heavy operations inside

// 4. map() does NOT skip holes (sparse arrays)
let sparse = [1, , 3];
console.log(sparse.map((n) => n * 10)); // [10, , 30]  ← preserves holes

// 5. Common real-world uses
// - Formatting API data
// - Creating JSX lists in React
// - Transforming numbers/strings/objects
// - Chaining with filter/reduce

// One-line rule for notes:
// map(callback) → creates NEW array by transforming each element
// Always returns same length array
// Chainable + immutable → favorite in modern JS / interviews
