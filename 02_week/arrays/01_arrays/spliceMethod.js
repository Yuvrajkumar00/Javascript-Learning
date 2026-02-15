/*************************************************
                SPLICE METHOD
*************************************************/

// The most powerful (and most confusing) array method
// Can REMOVE, ADD, REPLACE elements — all in one call

// Mutates the original array (destructive)

// Takes:
// • start       (index where to start, can be negative → from end)
// • deleteCount (how many elements to remove, 0 = insert only)
// • item1, item2, ... (optional: elements to insert at start position)

// Returns:
// • An array containing the DELETED elements
// • Empty array [] if nothing was deleted (e.g. insert-only or deleteCount=0)

// ────────────────────────────────────────────────
// Basic Examples
// ────────────────────────────────────────────────

// 1. Remove 2 elements starting from index 2
let numbers = [10, 20, 30, 40, 50, 60];
let removed = numbers.splice(2, 2);

console.log(removed);     // [30, 40]          ← deleted items
console.log(numbers);     // [10, 20, 50, 60]  ← original changed!

// 2. Insert without deleting (deleteCount = 0)
let fruits = ["apple", "mango"];
fruits.splice(1, 0, "banana", "kiwi");   // insert at index 1

console.log(fruits);      // ["apple", "banana", "kiwi", "mango"]
// returned [] because nothing deleted

// 3. Replace (delete + insert at same place)
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "orange"); // remove 1, add 2

console.log(colors);      // ["red", "yellow", "orange", "blue"]

// 4. Remove from end (using negative start)
let endRemove = [1,2,3,4,5];
endRemove.splice(-2, 2);  // start from 4th last → remove last 2

console.log(endRemove);   // [1,2,3]

// 5. Delete everything after certain index
let clearTail = ["a","b","c","d","e"];
clearTail.splice(2);      // deleteCount omitted → remove all from index 2 onward

console.log(clearTail);   // ["a", "b"]

// ────────────────────────────────────────────────
// Important things people forget / get asked in interviews
// ────────────────────────────────────────────────

// 1. Returns removed items (array), NOT the modified array
let trap = [1,2,3];
let wrong = trap.splice(1,1);   // wrong = [2]   ← array of removed!
console.log(trap);              // [1,3]

// 2. deleteCount = 0 → pure insert (very common pattern)
let insertOnly = [10,20,30];
insertOnly.splice(1, 0, 15);    // insert 15 between 10 and 20

// 3. Negative start index counts from the end
let neg = ["p1","p2","p3","p4"];
neg.splice(-1, 1, "LAST");      // replace last element
console.log(neg);                // ["p1","p2","p3","LAST"]

// 4. If start > array.length → acts like push (appends)
let appendLike = [1,2];
appendLike.splice(10, 0, 99);   // start=10 > length=2 → appends
console.log(appendLike);        // [1,2,99]

// 5. Common mistake: thinking it works like slice()
let mistake = [1,2,3,4];
mistake.splice(1,3);            // removes 2,3,4 → [1]
mistake.slice(1,3);             // would return [2,3] without changing original

// 6. Very flexible but slower than push/pop (O(n) in worst case)

// 7. Modern immutable alternatives (when you don't want to mutate)
let original = [1,2,3,4,5];

// a) Remove from middle (slice + concat / spread)
let withoutMiddle = [...original.slice(0,2), ...original.slice(3)];

// b) Insert in middle (spread with slice)
let withInsert = [...original.slice(0,2), 99, ...original.slice(2)];

// c) Replace (slice + insert new)
let replaced = [...original.slice(0,1), 777, ...original.slice(2)];

// These are more verbose but safe (no mutation)

// Bonus: splice to clear array (common trick)
let clearMe = [10,20,30];
clearMe.splice(0);              // remove from 0 to end
console.log(clearMe);           // []
// same as: clearMe.length = 0;