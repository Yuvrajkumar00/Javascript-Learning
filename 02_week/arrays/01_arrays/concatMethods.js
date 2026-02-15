/*************************************************
                CONCAT METHOD
*************************************************/

// Merges two or more arrays (or values) and returns a NEW array

// Does NOT mutate / change the original arrays (non-destructive / immutable)

// Takes:
// • Any number of arguments: arrays, single values, or mix of both
// • Can pass multiple arrays: arr1.concat(arr2, arr3, ...)
// • Can also pass non-array values (they get wrapped as single-element arrays)

// Returns:
// • A new array containing all elements from the original + added ones
// • Shallow copy (nested objects/arrays still share references)

// ────────────────────────────────────────────────
// Basic Examples
// ────────────────────────────────────────────────

// 1. Simple two-array merge
let marvel = ['Ironman', 'Thor', 'Hulk'];
let dc     = ['Superman', 'Batman'];

let allHeroes = marvel.concat(dc);

console.log(allHeroes);
// → ['Ironman', 'Thor', 'Hulk', 'Superman', 'Batman']

console.log(marvel);   // ['Ironman', 'Thor', 'Hulk']  ← unchanged
console.log(dc);       // ['Superman', 'Batman']     ← unchanged

// 2. Add single values + multiple arrays
let numbers = [1, 2, 3];
let more    = numbers.concat(4, 5, [6, 7], [8]);

console.log(more);
// → [1, 2, 3, 4, 5, 6, 7, 8]

// 3. Concat with empty array (useful for safe copying)
let copy = [].concat(marvel);   // shallow copy of marvel
console.log(copy);              // same as marvel, but new array

// 4. Chain multiple concats (possible but ugly)
let chained = marvel.concat(dc).concat(['Flash', 'Green Lantern']);

// ────────────────────────────────────────────────
// Important things people forget / get asked in interviews
// ────────────────────────────────────────────────

// 1. Returns NEW array — original arrays are NEVER modified
let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(a === c);   // false  ← different references

// 2. Shallow copy only (same as slice/spread)
let nested = [[1,2], [3,4]];
let merged = nested.concat([[5,6]]);

merged[0][0] = 99;      // changes the nested array
console.log(nested[0]); // [99, 2]  ← original affected!

// 3. Passing non-array values → automatically wrapped
let mixed = [10].concat("hello", true, null);
console.log(mixed);
// → [10, "hello", true, null]

// 4. Common mistake: thinking concat mutates like push
let wrong = [1,2];
wrong.concat([3,4]);      // returns new array, but wrong still [1,2]
console.log(wrong);       // [1,2]  ← unchanged!

// 5. Performance: O(n) where n is total elements being concatenated
//    Fine for small/medium arrays, but can be slow in tight loops

// 6. Modern & preferred alternative in 2025+ code: Spread operator (...)
let modernMerge = [...marvel, ...dc, 'extra', 99];
console.log(modernMerge);
// → same result as concat, but more readable & flexible

// Bonus: Spread can do things concat can't easily
let withCondition = [
  ...marvel,
  ...(someCondition ? dc : []),
  'extra'
];

// ────────────────────────────────────────────────
// concat vs Spread Operator (very common interview comparison)
// ────────────────────────────────────────────────

/*
Feature                  | concat()                          | Spread (...)                     | Winner (modern JS)
─────────────────────────┼───────────────────────────────────┼──────────────────────────────────┼────────────────────
Syntax                   | verbose                           | clean & short                    | Spread
Readability              | okay                              | excellent                        | Spread
Performance (small arr)  | similar                           | similar                          | Tie
Performance (large arr)  | slightly faster in some engines   | sometimes slower (older browsers)| concat (rarely matters)
Handles non-iterables    | yes (wraps them)                  | no (TypeError if not iterable)   | concat
Can spread objects?      | no                                | yes (...obj spreads properties)  | Spread
Most used in 2025+       | legacy code                       | new code / React / modern libs   | Spread
*/

// Recommendation
// Use concat() when:
// - You need to add non-iterable values safely
// - Supporting very old environments
// - Codebase style prefers it

// Use spread (...) when:
// - Everything is arrays/values you want to spread
// - Writing modern, clean code
// - Need conditional spreading

// One-line rule for notes:
// concat() = old-school safe merge (no mutation)  
// [...]    = modern, readable merge (preferred today)