/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        for...of  LOOP  —  Quick Revision Notes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose
───────
Easiest and cleanest way to loop over **iterable** things
Mainly used for: Arrays, Strings, Maps, Sets, NodeList, etc.

Syntax (most common forms)
───────────────────────────
for (const item of collection) {
    // item = current value
}

for (const [index, value] of collection.entries()) {
    // when you also need index
}

Key Points to Remember Forever
───────────────────────────────
1. Gives you the **value** directly (not index by default)
2. Works beautifully with **destructuring** → [index, value]
3. You CAN use break, continue, return inside it
4. You CANNOT use it to change the original array easily
   (use map/filter or classic for with index if you need to mutate)
5. Much cleaner than classic for (let i = 0; ...)
6. Slower than classic for loop → but difference usually doesn't matter

When to use for...of (real-life decision)
─────────────────────────────────────────
✓ Want clean code + direct value           → for...of
✓ Need index too                           → for...of + .entries()
✓ Need to break / continue / early return  → for...of    or    for (let i=0)
✓ Just doing side effects (log, push, etc) → for...of   or   forEach
✓ Want new array (transform)               → map()
✓ Want to filter elements                  → filter()
✓ Performance is extremely critical        → classic for loop

Quick Examples Table (memorize these patterns)

Task                             Code Example
───────────────────────────────  ────────────────────────────────────────
Print every element              for (const x of arr) console.log(x)
Print with index                 for (const [i, x] of arr.entries()) console.log(i, x)
Sum numbers                      let sum = 0; for (const n of numbers) sum += n;
Find first match & stop          for (const item of list) { if (item > 100) { found = item; break; } }
Skip even numbers                for (const n of nums) { if (n % 2 === 0) continue; console.log(n); }
Loop over string                 for (const char of "hello") console.log(char);
Count vowels                     let c=0; for (const ch of text) if('aeiou'.includes(ch)) c++;

Most common real patterns (2024–2026 style)
────────────────────────────────────────────
1. for (const todo of todos) { ... }                                 // clean
2. for (const [i, product] of products.entries()) { ... }            // with index
3. for (const line of text.split('\n')) { ... }                      // lines of text
4. for (const [key, value] of myMap) { ... }                         // Map
5. for (const file of fileList) { ... }                              // FileList / NodeList

Never do this (common mistakes)
───────────────────────────────
✗ for (const i of arr) arr[i] = ...          // wrong — i is value, not index
✗ for (const x in arr) ...                   // wrong on arrays — use for...in only on objects

One-line memory hook
────────────────────
"for...of → values Of iterable, clean & can break"

Good luck with revision! 🚀
*/