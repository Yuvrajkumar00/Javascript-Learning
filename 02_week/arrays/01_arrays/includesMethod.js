/*************************************************
                INCLUDES METHOD
*************************************************/

// Checks if a value exists in the array (returns true/false)

// Does NOT mutate the original array

// Takes:
// • searchElement (the value to find)
// • fromIndex (optional: start searching from this index, default = 0)
//   - Can be negative (counts from the end)

// Returns:
// • true  → if the value is found
// • false → if not found

// Uses strict equality (===) for comparison

// ────────────────────────────────────────────────
// Basic Examples
// ────────────────────────────────────────────────

// 1. Simple check
let fruits = ["apple", "banana", "mango", "kiwi"];

console.log(fruits.includes("banana"));   // true
console.log(fruits.includes("orange"));   // false

// 2. Case-sensitive (strings)
console.log(fruits.includes("Banana"));   // false  ← capital B

// 3. Numbers & other types
let numbers = [1, 2, 3, NaN, 0, -0];
console.log(numbers.includes(2));         // true
console.log(numbers.includes(NaN));       // true   ← special case
console.log(numbers.includes(-0));        // true   ← -0 === 0 in includes

// 4. fromIndex usage
console.log(fruits.includes("mango", 2)); // true   (starts from index 2)
console.log(fruits.includes("apple", 2)); // false  (apple is before index 2)

console.log(fruits.includes("kiwi", -1)); // true   (from last element)
console.log(fruits.includes("kiwi", -5)); // true   (negative beyond length → from 0)

// 5. Empty array
let empty = [];
console.log(empty.includes("anything"));  // false

// ────────────────────────────────────────────────
// Important things people forget / get asked in interviews
// ────────────────────────────────────────────────

// 1. Uses STRICT equality (===) — no type coercion
console.log([1, "1", 2].includes(1));     // true
console.log([1, "1", 2].includes("1"));   // true
console.log([1, "1", 2].includes(1));     // true  (1 === 1)
console.log([1, "1", 2].includes("2"));   // false (no "2" string)

// 2. Special handling for NaN
//   → includes() finds NaN (unlike indexOf())
console.log([NaN].includes(NaN));         // true
console.log([NaN].indexOf(NaN));          // -1    ← indexOf fails with NaN

// 3. Handles -0 and +0 the same way
console.log([0].includes(-0));            // true   (0 === -0)

// 4. fromIndex out of bounds
//    - If fromIndex >= length → false
//    - If fromIndex < -length → searches from 0
console.log(fruits.includes("apple", 10));  // false
console.log(fruits.includes("apple", -10)); // true

// 5. Common mistake: using includes() on objects / nested arrays
let people = [{name: "Ram"}, {name: "Shyam"}];
console.log(people.includes({name: "Ram"})); // false  ← different object reference!

// Reason: checks reference, not deep equality

// 6. Performance: O(n) linear search — fine for small arrays
//    For very large arrays + frequent checks → better to use Set

// 7. Modern alternative: Set.has() (faster lookup)
let uniqueFruits = new Set(fruits);
console.log(uniqueFruits.has("banana"));   // true  (average O(1))

// ────────────────────────────────────────────────
// includes() vs indexOf() vs some() (interview favorite comparison)
// ────────────────────────────────────────────────
/*
Feature                  | includes()                     | indexOf()                      | some()
─────────────────────────┼────────────────────────────────┼────────────────────────────────┼───────────────────────────────
Returns                  | true / false                   | index (number) or -1           | true / false
Finds what?              | Exact value (===)              | Exact value (===)              | Condition / callback
NaN support              | Yes (finds NaN)                | No (returns -1)                | Depends on callback
fromIndex support        | Yes                            | Yes                            | No (but can slice first)
Performance              | O(n)                           | O(n)                           | O(n)
Best use case            | Simple "does it exist?"        | Need the position              | Complex condition (e.g. object property)
*/

/*
Recommendation:
- Want just "exists or not?" → use includes()
- Want the index/position   → use indexOf() or findIndex()
- Want to check condition   → use some()
*/

// One-line rule for notes:
// includes(value, fromIndex?) → true if value exists (strict ===), false otherwise
// Special: finds NaN, treats -0/+0 same, case-sensitive for strings