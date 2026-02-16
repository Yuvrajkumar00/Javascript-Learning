/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        array.filter()  —  Quick Revision Notes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose
───────
Create a **new array** that contains **only those elements** which pass a test (return true in callback).
→ Used when you want to **select / keep** some items and **reject** others.

Syntax (most common patterns)
──────────────────────────────
const newArr = arr.filter((item) => item > 10);

const newArr = arr.filter((item, index) => { ... return condition; });

Key Points to Remember Forever
───────────────────────────────
1. Always returns a **new array** (original array safe – immutable)
2. Returns **only those items** where callback returns **true**
3. If callback returns false / undefined / null → that item is **excluded**
4. Does **NOT** mutate the original array
5. Does **NOT** stop early (always checks every item)
6. If no items match → returns empty array []
7. Very often chained with .map() or .sort()

When to use filter (real 2024–2026 decision table)

Situation                                 → Best choice
─────────────────────────────────────────  ───────────────────────────────
Want only some items from array           → filter()
Want to transform every item              → map()
Want both filter + transform              → filter().map()  (or map().filter())
Need to stop early when found one         → find() / some()
Just doing side effects per item          → forEach() / for...of
Want one final value (sum, max, group)    → reduce()

Quick Examples Table (memorize these patterns)

Task                               Code Example
─────────────────────────────────  ────────────────────────────────────────
Numbers > 4                        nums.filter(n => n > 4)
Even numbers only                  nums.filter(n => n % 2 === 0)
Adults only                        people.filter(p => p.age >= 18)
Books of 'History'                 books.filter(bk => bk.genre === 'History')
Recent History books               books.filter(bk => bk.genre === 'History' && bk.publish >= 1995)
Active users                       users.filter(u => u.isActive && u.role !== 'admin')
Non-empty strings                  strings.filter(s => s.trim() !== '')

Your code explained (very common pattern)

const myNums = [1,2,3,4,5,6,7,8,9,10];

// Arrow function implicit return (short & popular)
const newNums = myNums.filter(num => num > 4);
// → [5,6,7,8,9,10]

// Same thing with explicit return (longer but clearer sometimes)
const newNums2 = myNums.filter(num => {
  return num > 4;
});

// Using forEach + push (works but not recommended style)
const newNums3 = [];
myNums.forEach(num => {
  if (num > 4) newNums3.push(num);
});
// → same result, but filter is cleaner & more declarative

Books example (multiple conditions)
let userBooks = books.filter(bk => bk.genre === 'History');
// → Book Three (1999), Book Seven (1986)

userBooks = books.filter(bk => bk.publish >= 1995 && bk.genre === 'History');
// → only Book Three (1999) matches both conditions

Common real-world patterns

1. products.filter(p => p.price < 500 && p.inStock)
2. todos.filter(t => !t.completed)
3. searchResults = items.filter(item => item.name.toLowerCase().includes(searchText))
4. recentPosts = posts.filter(p => new Date(p.date) > lastWeek)

Never do this (top mistakes)

✗ let result = arr.filter(...); result = result + 5;   // wrong – filter returns array
✗ arr.filter(n => n > 10 = true);                      // SyntaxError
✗ filter on non-array (null / object / string)         // TypeError

One-line memory hook
────────────────────
"filter → keep only items where condition is TRUE → returns new array"

Good luck with revision, Yuvraj! 🚀
*/