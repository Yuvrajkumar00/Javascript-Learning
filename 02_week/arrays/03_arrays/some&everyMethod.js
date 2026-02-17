/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          .some()  &  .every()  —  Quick Revision Notes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose
───────
Quickly check **existence** or **universal condition** in an array  
→ Boolean answer only (true / false)  
→ Stops as soon as it knows the answer (very efficient)

Method          Returns                          Stops early?   Meaning
──────────────  ──────────────────────────────── ────────────── ────────────────────────────────
.some(callback) true if AT LEAST ONE item passes | Yes          "Kya koi ek bhi satisfy karta hai?"
.every(callback) true if ALL items pass          | Yes          "Kya sabhi satisfy karte hain?"

Key Points to Remember Forever
───────────────────────────────
1. Both return **boolean** (true/false) — NOT array, NOT element
2. **Early exit** → very fast (stops the moment decision is clear)
   - .some() → stops when finds first true
   - .every() → stops when finds first false
3. If array is empty:
   → .some() → false
   → .every() → true   (vacuously true – logical rule)
4. Original array **never changed**
5. Callback: (item, index?, array?) => boolean
6. Much faster & cleaner than .filter().length > 0 or loop + flag

When to use (real 2024–2026 decision table)

Situation                                      → Best choice
──────────────────────────────────────────────  ───────────────────────────────
Check if at least one item satisfies condition → .some()
Check if every item satisfies condition        → .every()
Get the first matching item                    → .find()
Get all matching items                         → .filter()
Need index of match                            → .findIndex()
Just loop for side effects                     → .forEach() / for...of

Quick Examples Table (memorize these patterns)

Task                                      Code Example
────────────────────────────────────────  ────────────────────────────────────────
Any adult in group?                       people.some(p => p.age >= 18)
All products in stock?                    products.every(p => p.stock > 0)
Has any error in form?                    fields.some(f => !f.valid)
All todos completed?                      todos.every(t => t.completed)
Any number negative?                      nums.some(n => n < 0)
All strings non-empty?                    strings.every(s => s.trim() !== '')
Has admin user?                           users.some(u => u.role === 'admin')
All users active?                         users.every(u => u.active)

Common real-world patterns

1. if (cart.some(item => item.price > 10000)) {
     alert("Expensive item detected!");
   }

2. const formIsValid = inputs.every(input => input.value.trim() !== '');

3. const hasVip = orders.some(o => o.isVip && o.status === 'pending');

4. if (!files.every(f => f.size < 5 * 1024 * 1024)) {
     alert("Some file is larger than 5MB");
   }

Never do this (top mistakes)

✗ if (arr.some(...) > 0)                      // wrong – .some() already returns boolean
✗ arr.some(n => n > 10 = true)                // SyntaxError
✗ Using .filter().length > 0 instead of .some()  // unnecessary array creation
✗ Thinking .every() on empty array is false   // it's true!

One-line memory hooks
─────────────────────
".some() → Koi ek bhi hai? → true/false"
".every() → Sabhi hain? → true/false"
"Both stop early → fast checks"
*/