/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          array.forEach()  —  Quick Revision Notes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose
───────
Run the same action (side-effect) for **every** element of an array.
Best used when: You don't need a new array, just want to "do something" with each item.

Syntax (most common patterns)
──────────────────────────────
array.forEach((item) => {
    // do something with item
});

array.forEach((item, index) => { ... });

array.forEach((item, index, originalArray) => { ... });   // rarely used 3rd param

Key Points to Remember Forever
───────────────────────────────
1. Does **NOT** return anything → always returns undefined
2. Does **NOT** create a new array (unlike map/filter)
3. **Cannot break / continue / return early** — always runs till the end
4. Great for: console.log, DOM updates, pushing to another array, API calls per item
5. Callback receives: (currentValue, index?, array?)
6. Original array is **not changed** unless you mutate inside the callback
7. Slightly slower than for...of / classic for (but usually doesn't matter)

When to use forEach (real 2024–2026 decision table)

Situation                                 → Best choice
─────────────────────────────────────────  ───────────────────────────────
Just doing side effects (log, alert, save) → forEach   or   for...of
Need to break / continue / stop early      → for...of   or   classic for
Want to create new transformed array       → map()
Want to keep only some elements            → filter()
Need both transform + side effect          → forEach (mutate external) or map + forEach
Performance is ultra critical (huge array) → classic for loop

Quick Examples Table (memorize these 5 patterns)

Task                               Code Example
─────────────────────────────────  ────────────────────────────────────────
Print every item                   numbers.forEach(n => console.log(n));
Print with index                   fruits.forEach((f, i) => console.log(i, f));
Sum into external variable         let total = 0;  prices.forEach(p => total += p);
Add to another array               let doubled = [];  nums.forEach(n => doubled.push(n*2));
Update DOM elements                document.querySelectorAll('li').forEach(li => li.classList.add('done'));
Change object properties           users.forEach(user => user.active = true);

Common real-world patterns (very frequent)

1. users.forEach(user => console.log(user.name));
2. todos.forEach((todo, i) => todo.id = i + 1);
3. document.querySelectorAll('.btn').forEach(btn => btn.disabled = true);
4. let errors = [];  formInputs.forEach(input => { if (!input.value) errors.push(input.name); });
5. images.forEach(img => img.addEventListener('load', handleImageLoad));

Never do this (top beginner mistakes)

✗ let newArr = arr.forEach(...);               // → newArr will be undefined!
✗ arr.forEach(n => if (n > 10) break; )        // → SyntaxError, cannot break
✗ forEach on non-array (like object / null)    // → TypeError

One-line memory hook
────────────────────
"forEach → do something FOR EACH item, no return, no break, side effects only"

Good luck with revision, Yuvraj! 🚀
*/