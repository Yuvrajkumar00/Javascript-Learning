// ────────────────────────────────────────────────
// SPREAD OPERATOR (...) – Modern & very important
// ────────────────────────────────────────────────

// Spread ka kaam: multiple arrays/objects ko expand karke ek new array/object bana deta hai
// Original arrays change nahi hote (immutable)

let heroes = ['ironman', 'thor', 'hulk', 'ant-man', 'loki'];
let dc_heroes = ['shaktiman', 'superman', 'wonder woman'];
let south_heroes = ['rocky', 'prabhas', 'allu-arjun', 'dhanush'];

let my_spread = [...heroes, ...dc_heroes, ...south_heroes];
// → ek naya array banega jisme sab heroes combine honge
console.log(my_spread);

// Extra uses of spread (interview mein bahut puchhte hain)
let copy = [...heroes];                     // shallow copy of array
let merged = [...heroes, 'spiderman'];      // add new item (without push)
let combined = [...heroes, ...dc_heroes];   // merge arrays

// Note: Spread shallow copy karta hai → nested arrays/objects reference share karte hain

// ────────────────────────────────────────────────
// flat() – Nested arrays ko flat (single level) bana deta hai
// ────────────────────────────────────────────────

// flat(depth) → kitne level tak flatten karna hai (default = 1)

let another_array = [1, 3, 4, 5, [9, 0, 8], 6, [2, 5, 6, 1, [9, 5, 8, 6]], 5];

let real_another_array = another_array.flat(2);   // 2 level tak flatten
// console.log(real_another_array);
// → [1,3,4,5,9,0,8,6,2,5,6,1,9,5,8,6,5]

let flatAll = another_array.flat(Infinity);       // sab levels flatten (sabse safe)
console.log(flatAll);

// Important: original array change nahi hota → naya array return karta hai

// ────────────────────────────────────────────────
// Array.isArray() – Check karo ki value array hai ya nahi
// ────────────────────────────────────────────────

let my_isarray = Array.isArray(heroes);           // true
console.log(my_isarray);

let my_isarrays = Array.isArray('yuvraj kumar');  // false
console.log(my_isarrays);

let my_isarrays2 = Array.isArray([1,2,3]);        // true
let my_isarrays3 = Array.isArray({a:1});          // false

// Interview trap: typeof [] → "object" hota hai (galat check)
// Isliye Array.isArray() best way hai

// ────────────────────────────────────────────────
// Array.from() – Kisi bhi iterable ya array-like cheez ko real array mein convert
// ────────────────────────────────────────────────

let my_from = Array.from("yuvraj kumar");   // string → array of characters
console.log(my_from);
// → ['y','u','v','r','a','j',' ','k','u','m','a','r']

let my_from2 = Array.from({length: 5}, (_, i) => i + 1); // 1 se 5 tak array
console.log(my_from2);   // [1,2,3,4,5]

// Common use: NodeList / arguments ko array mein badalna
// let nodes = Array.from(document.querySelectorAll('div'));

// ────────────────────────────────────────────────
// Array.of() – Multiple values ya variables ko array mein convert
// ────────────────────────────────────────────────

let score1 = 100;
let score2 = 200;
let score3 = 300;

let my_of = Array.of(score1, score2, score3);
console.log(my_of);   // [100, 200, 300]

// Multiple arrays ko bhi ek array mein daal sakte ho
let mynew_off = Array.of(heroes, dc_heroes, south_heroes);
console.log(mynew_off);
// → [ ['ironman',...], ['shaktiman',...], ['rocky',...] ]  ← 2D array

// Difference from new Array()
// Array.of(5)     → [5]
// new Array(5)    → [ <5 empty items> ] (trap!)

// ────────────────────────────────────────────────
// Quick Comparison Table (exam/interview ke liye best)

/*
Method          | Kaam kya karta hai                          | Naya array banata hai? | Original change?
────────────────┼─────────────────────────────────────────────┼────────────────────────┼─────────────────
...spread       | Arrays merge / copy / add elements          | Yes                    | No
flat()          | Nested arrays ko single level bana deta     | Yes                    | No
Array.isArray() | Check karta hai array hai ya nahi           | No (boolean)           | —
Array.from()    | String / iterable ko array mein badalta     | Yes                    | —
Array.of()      | Values ko array mein convert karta          | Yes                    | —
*/

// Interview Traps to remember
// 1. spread → shallow copy (nested arrays reference same rahte hain)
// 2. flat(Infinity) → sabse safe for unknown depth
// 3. new Array(5) ≠ Array.of(5) → trap!
// 4. typeof [] = "object" → galat check, use Array.isArray()