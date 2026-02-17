/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          .find()  .findIndex()  .findLast()  .findLastIndex()
                  —  Quick Revision Notes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose
───────
Find **the first** (or last) element that matches a condition.
→ Stops as soon as it finds a match (very efficient)

Main Methods (all take a callback)

Method          Returns                          Stops early?   Since
──────────────  ──────────────────────────────── ────────────── ───────
.find()         the element itself               Yes            ES6
.findIndex()    the index of first match         Yes            ES6
                or -1 if not found
.findLast()     the last matching element        Yes            ES2022+
.findLastIndex() the index of last match         Yes            ES2022+
                or -1 if not found

Key Points to Remember Forever
───────────────────────────────
1. Returns **first match** (or undefined / -1) — does NOT return array
2. **Stops immediately** when match found → faster than filter() + [0]
3. Original array is **not changed**
4. Callback: (item, index?, array?) => boolean
5. If no match → .find() → undefined    .findIndex() → -1
6. Very useful when you need **just one item** (first user with role 'admin', first error, etc.)
7. .findLast() & .findLastIndex() are newer — great for recent/last item

When to use (real 2024–2026 decision table)

Situation                                 → Best choice
─────────────────────────────────────────  ───────────────────────────────
Want the first item that matches          → .find()
Want the position of first match          → .findIndex()
Want the most recent / last match         → .findLast() / .findLastIndex()
Want ALL matching items                   → .filter()
Want to check if at least one exists      → .some()
Want to check if every item satisfies     → .every()
Need index to update/splice later         → .findIndex()

Quick Examples Table (memorize these patterns)

Task                                    Code Example
──────────────────────────────────────  ────────────────────────────────────────
First number > 10                       numbers.find(n => n > 10)
Index of first even number              numbers.findIndex(n => n % 2 === 0)
First active user                       users.find(u => u.active)
First product out of stock              products.find(p => p.stock === 0)
Last message from user                  messages.findLast(m => m.from === 'Yuvraj')
Index of last error                     logs.findLastIndex(log => log.level === 'error')
First book published after 2000         books.find(bk => bk.publish > 2000)

Common real-world patterns

1. const admin = users.find(u => u.role === 'admin');
   if (admin) console.log(admin.name);

2. const firstInvalid = formFields.find(f => !f.value);
   if (firstInvalid) firstInvalid.focus();

3. const latestOrder = orders.findLast(o => o.status === 'completed');

4. const pos = todos.findIndex(t => t.id === targetId);
   if (pos !== -1) todos[pos].completed = true;   // or splice
*/

// Never do this (top mistakes)

// ✗ const result = arr.find(...); result.push(...);   // undefined has no push!
// ✗ arr.find(n => n > 10)[0]                          // wrong – find already gives element
// ✗ Using .filter()[0] instead of .find()             // slower + unnecessary new array

/*One-line memory hook
────────────────────
"find → FIRST match (element or undefined), stops early"
"findIndex → FIRST position or -1"
"findLast → LAST match (newer & very useful)"
*/