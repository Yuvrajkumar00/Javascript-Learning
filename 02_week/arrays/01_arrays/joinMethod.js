/*************************************************
                JOIN METHOD
*************************************************/

// Converts all elements of an array into a single STRING

// Does NOT mutate the original array (non-destructive)

// Takes:
// • separator (optional string)
//   - Default: comma "," (if you call join() without argument)
//   - Can be any string: "", " - ", "|", "\n", etc.

// Returns:
// • A string with all array elements joined together
// • If array is empty → returns empty string ""
// • null / undefined elements become empty string ""
// • Objects / nested arrays become string "[object Object]" or "1,2,3"

// ────────────────────────────────────────────────
// Basic Examples
// ────────────────────────────────────────────────

// 1. Default separator (comma)
let fruits = ["apple", "banana", "kiwi"];
let result = fruits.join();

console.log(result);          // "apple,banana,kiwi"
console.log(typeof result);   // "string"

// 2. Custom separator
let joinedWithDash = fruits.join(" - ");
console.log(joinedWithDash);  // "apple - banana - kiwi"

let noSeparator = fruits.join(""); 
console.log(noSeparator);     // "applebananakiwi"  ← very common for concatenation

let withSpaces = fruits.join(", ");
console.log(withSpaces);      // "apple, banana, kiwi"

// 3. Empty array
let empty = [];
console.log(empty.join());    // ""  ← empty string
console.log(empty.join("-")); // ""  ← still empty

// 4. Special cases: null, undefined, numbers, objects
let mixed = [1, "hello", null, undefined, true, [2,3]];
console.log(mixed.join("|"));
// → "1|hello|||true|2,3"  
// Explanation:
// null → ""
// undefined → ""
// true → "true"
// array → "2,3" (calls toString() on nested array)
// object → "[object Object]"

// ────────────────────────────────────────────────
// Important things people forget / get asked in interviews
// ────────────────────────────────────────────────

// 1. join() does NOT change the original array
let colors = ["red", "green"];
colors.join(" + ");
console.log(colors);          // still ["red", "green"]

// 2. Opposite method: split() (string → array)
let str = "a,b,c";
let backToArray = str.split(",");   // ["a","b","c"]
console.log(backToArray);

// 3. Very common mistake: forgetting that nested arrays/objects get stringified poorly
let nested = [[1,2], [3,4]];
console.log(nested.join("-"));     // "1,2-3,4"  ← not useful most times

// Better way if you want nested control: map first
let better = nested.map(sub => sub.join(",")).join(" | ");
console.log(better);               // "1,2 | 3,4"

// 4. Performance: O(n) – fine for almost all cases
//    But avoid in very tight loops with huge arrays (rare)

// 5. Common real-world uses
// a) CSV-like string
let csv = ["name", "age", "city"].join(",");  // "name,age,city"

// b) HTML list
let items = ["milk", "bread", "eggs"];
let html = "<ul><li>" + items.join("</li><li>") + "</li></ul>";

// c) Path or URL building
let path = ["users", "123", "profile"].join("/");  // "users/123/profile"

// 6. Modern alternative: template literals + map (more control)
let modern = fruits.map(f => `<strong>${f}</strong>`).join(", ");
console.log(modern);  // "<strong>apple</strong>, <strong>banana</strong>, <strong>kiwi</strong>"

// ────────────────────────────────────────────────
// join() vs toString() (very common interview comparison)
// ────────────────────────────────────────────────

/*
Feature                | join()                              | toString()
───────────────────────┼─────────────────────────────────────┼───────────────────────────────
Separator              | Customizable (any string)           | Always comma ","
Empty array            | ""                                  | ""
null/undefined         | ""                                  | "null" / "undefined"
Nested arrays          | Calls toString() on them            | Same
Readability            | Better (clear intent)               | Older style
Most used today        | Yes                                 | Less common now
*/

// Recommendation
// → Always prefer join() over toString()
// → Use join("") when you want no separator
// → Use join("\n") for readable logs / multi-line output

// One-line rule for notes:
// join(separator?) → turns array into string with chosen glue  
// Default glue = ","  
// null/undefined → empty string in result