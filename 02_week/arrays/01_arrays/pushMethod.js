/*************************************************
                    PUSH METHOD
*************************************************/

// Mutates the original array (does NOT create new array)

// Takes:
// • 1 or more elements to append at the end
// • Can push multiple values at once: arr.push(a, b, c)

// Returns:
// • The new length of the array (not the array itself!)

let arr = [10, 20];
let newLength = arr.push(30, 40, 50);

// console.log(arr);       // [10, 20, 30, 40, 50]
// console.log(newLength); // 5

// ────────────────────────────────────────────────
// Important things people forget / get asked in interviews:

// 1. Returns length, NOT the array
let a = [1];
let x = a.push(2);     // x = 2 (number!)
let y = a.push(3,4,5); // y = 5

// 2. Can push anything (including objects, arrays, null, undefined)
let mixed = [];
mixed.push({name:"Ram"}, [7,8], null, undefined);
// console.log(mixed);    // [ {name:"Ram"}, [7,8], null, undefined ]

// 3. Very fast / efficient (amortized O(1))

// 4. Opposite / counterpart → pop()  (removes from end)

// 5. Common mistake:
let fruits = ["apple", "banana"];
// ❌ Wrong if you want the new array
// let wrong = fruits.push("kiwi");     
// wrong = 3 (a number → the new length!)
// fruits is now modified: ["apple", "banana", "kiwi"]

// ✅ Correct ways to get a NEW array + "kiwi" (original stays unchanged)

let correctA = [...fruits, "kiwi"];          // modern & clean (spread)
// console.log(correctA);

let correctB = fruits.concat("kiwi");        // classic way, very readable
// console.log(correctB);

let correctC = fruits.concat(["kiwi"]);      // same as above (concat accepts array too)
// console.log(correctC);

// console.log(fruits);

// All three give: ["apple", "banana", "kiwi"]
// fruits is still: ["apple", "banana"]

// Bonus: concat can add multiple items easily
let correctD = fruits.concat("kiwi", "mango", "orange");
console.log(correctD);

// → ["apple", "banana", "kiwi", "mango", "orange"]

// Bonus (modern alternative when you want new array):
let arr2 = [1,2,3];
let arr3 = [...arr2, 4, 5];   // clean & immutable way