/*************************************************
                INDEXOF METHOD
*************************************************/

// Finds the FIRST occurrence of a value in the array and returns its index

// Does NOT mutate the original array

// Takes:
// • searchElement (the value to find)
// • fromIndex (optional: start searching from this index, default = 0)
//   - Can be negative (counts from the end, but converted to positive)

// Returns:
// • The index (0-based) of the first matching element
// • -1 if the value is NOT found

// Uses strict equality (===) for comparison

// ────────────────────────────────────────────────
// Basic Examples
// ────────────────────────────────────────────────

// 1. Simple search
let fruits = ["apple", "banana", "mango", "banana", "kiwi"];

console.log(fruits.indexOf("banana"));   // 1   ← first occurrence
console.log(fruits.indexOf("orange"));   // -1  ← not found

// 2. Case-sensitive (strings)
console.log(fruits.indexOf("Banana"));   // -1   ← capital B doesn't match

// 3. Numbers & duplicates
let numbers = [10, 20, 30, 20, 40];
console.log(numbers.indexOf(20));        // 1   ← first 20
console.log(numbers.indexOf(20, 2));     // 3   ← second 20 (starts from index 2)

// 4. Negative fromIndex (counts from end)
console.log(fruits.indexOf("banana", -3)); // 3   ← finds the second banana
console.log(fruits.indexOf("kiwi", -1));   // 4

// 5. Empty array or out-of-bounds fromIndex
let empty = [];
console.log(empty.indexOf("anything"));   // -1

let small = [1,2,3];
console.log(small.indexOf(1, 5));         // -1  (fromIndex > length)

// ────────────────────────────────────────────────
// Important things people forget / get asked in interviews
// ────────────────────────────────────────────────

// 1. Returns FIRST occurrence only (not all positions)
//    → To find last → use lastIndexOf()
//    → To find all → loop or use filter/map

// 2. Uses STRICT equality (===) — no type coercion
console.log([1, "1", 2].indexOf(1));      // 0   (1 === 1)
console.log([1, "1", 2].indexOf("1"));    // 1   ("1" === "1")
console.log([1, "1", 2].indexOf(1));      // 0

// 3. NaN is NEVER found (big difference from includes)
console.log([NaN, 1, 2].indexOf(NaN));    // -1   ← always -1 !
console.log([NaN, 1, 2].includes(NaN));   // true  ← includes wins here

// 4. -0 and +0 are treated the same
console.log([0, 1].indexOf(-0));          // 0   (0 === -0)

// 5. Common mistake: using indexOf on objects / nested arrays
let people = [{name: "Ram"}, {name: "Shyam"}];
console.log(people.indexOf({name: "Ram"})); // -1   ← different reference!

// Reason: compares references, not contents

// 6. Performance: O(n) linear search
//    For large arrays + frequent lookups → use Set or Map instead

// 7. Real-world uses
// a) Check existence + get position
if (fruits.indexOf("mango") !== -1) {
  console.log("Found at:", fruits.indexOf("mango"));
}

// b) Remove first occurrence
let idx = fruits.indexOf("banana");
if (idx !== -1) fruits.splice(idx, 1);

// c) Find duplicate positions
let firstBanana = fruits.indexOf("banana");        // 1
let secondBanana = fruits.indexOf("banana", firstBanana + 1); // 3

// ────────────────────────────────────────────────
// indexOf() vs includes() vs findIndex() (interview favorite comparison)
// ────────────────────────────────────────────────

/*
Feature                  | indexOf()                      | includes()                     | findIndex()
─────────────────────────┼────────────────────────────────┼────────────────────────────────┼───────────────────────────────
Returns                  | index (number) or -1           | true / false                   | index or -1
Finds what?              | Exact value (===)              | Exact value (===)              | First that matches callback
NaN support              | No (always -1)                 | Yes                            | Depends on callback
fromIndex support        | Yes                            | Yes                            | No (but can slice first)
Use when you need        | Position / index               | Just existence                 | Condition (e.g. obj.age > 18)
Modern preference        | Classic                        | Cleaner for existence          | More flexible (callback)
*/

/*
Recommendation:
- Need the **position/index** → use `indexOf()`
- Just need **exists or not** → use `includes()` (cleaner & handles NaN)
- Need to search by **condition** → use `findIndex()`
*/

// One-line rule for notes:
// indexOf(value, fromIndex?) → returns FIRST index where value === element, or -1 if not found
// Fails with NaN, uses strict ===, returns position (not boolean)