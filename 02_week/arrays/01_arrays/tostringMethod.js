/*************************************************
                TOSTRING METHOD
*************************************************/

// Converts the array to a primitive string by calling toString() on each element

// Does NOT mutate the original array

// Takes:
// • nothing (no arguments)

// Returns:
// • A string representation of the array
// • Elements are joined with comma "," (no custom separator allowed)
// • Each element is converted via its own .toString() method

// Inherited from Object.prototype → every array has this method

// ────────────────────────────────────────────────
// Basic Examples
// ────────────────────────────────────────────────

// 1. Simple array
let fruits = ["apple", "banana", "mango"];

console.log(fruits.toString());
// → "apple,banana,mango"

console.log(typeof fruits.toString());  // "string"

// 2. Numbers & mixed types
let mixed = [1, true, null, undefined, 3.14];
console.log(mixed.toString());
// → "1,true,,3.14"
// Explanation:
// null     → "null"
// undefined → ""
// true     → "true"

// 3. Nested arrays & objects
let nested = [1, [2,3], {name: "Ram"}];
console.log(nested.toString());
// → "1,2,3,[object Object]"
// → nested array calls its own toString() → "2,3"
// → object becomes "[object Object]"

// 4. Empty array
let empty = [];
console.log(empty.toString());  // ""   ← empty string

// ────────────────────────────────────────────────
// Important things people forget / get asked in interviews
// ────────────────────────────────────────────────

// 1. Always uses comma as separator — no way to change it
//    → This is the biggest limitation compared to join()

// 2. Behaves almost exactly like join() with default separator ","
//    → fruits.toString() === fruits.join()   // true

// 3. null → "null" (string "null")
//    undefined → "" (empty string)
//    This is different from join() where both become ""

// join() vs toString() difference example:
let arr = [1, null, undefined, 2];
console.log(arr.join());        // "1,,,2"
console.log(arr.toString());    // "1,null,,2"   ← null becomes "null"

// 4. Objects / nested arrays → poor string representation
//    → "[object Object]" is almost never useful

// 5. Common mistake: expecting custom separator or nice output
console.log([1,2,3].toString());  // "1,2,3" — no spaces, no control

// 6. Real-world uses (rare in modern code)
// - Quick & dirty debugging / logging
// - Implicit conversion (e.g., "" + arr or arr + "")
//   let msg = "Items: " + fruits;   // "Items: apple,banana,mango"
// - Legacy code or very old browsers (pre-ES5)

// 7. Performance: O(n) — similar to join()
//    But join() is more flexible and explicit

// ────────────────────────────────────────────────
// toString() vs join() (very common interview comparison)
// ────────────────────────────────────────────────

/*
Feature                  | toString()                     | join()
─────────────────────────┼────────────────────────────────┼───────────────────────────────
Separator                | Always ","                     | Customizable (any string)
No argument              | Uses ","                       | Uses ","
null                     | "null"                         | ""
undefined                | ""                             | ""
Nested arrays            | Calls toString() on them       | Same
Objects                  | "[object Object]"              | Same
Intent / readability     | Implicit / legacy              | Explicit / modern
Most used today          | Rare                           | Very common
*/

/*
Recommendation:
→ Always use join() instead of toString() in new code
→ join() gives you control over separator
→ join("") for clean concatenation without commas
→ toString() is mostly seen in old code or when array is coerced to string automatically
*/

// One-line rule for notes:
// toString() → turns array into comma-separated string (no arguments, no customization)
// Almost same as join() but less flexible — prefer join() always