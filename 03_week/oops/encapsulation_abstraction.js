/* =================================================
    🧠 Encapsulation & Abstraction in JavaScript
================================================= */

/*
📌 First Understand the Core Idea

🔒 Encapsulation ==> Encapsulation is the process of bundling data and methods together inside a class and restricting direct access to some components.

Purpose:
    Protect data
    Prevent accidental modification
    Maintain data integrity

Achieved Using:
    Classes
    Private fields (#)
    Closures

Key Concept:
Data should not be directly accessed from outside.


🎭 Abstraction ==> Abstraction is the concept of hiding internal implementation details and exposing only necessary functionality.

Purpose:
    Reduce complexity
    Improve usability
    Increase maintainability

Key Concept:
User interacts only with what is needed.

Remember Encapsulation and Abstraction both work together.
*/


// 🚗 Real World Example: Bank Account System
// This example will demonstrate BOTH concepts clearly.

/* =================================================
        Encapsulation + Abstraction Example
================================================= */

class BankAccount {

    // 🔒 Encapsulation: Private field
    #balance = 0;

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    // 🎭 Abstraction: Public method
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Creating account
const account = new BankAccount("Yuvraj", 1000);

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance()); // 1300

// ❌ Direct access not allowed
// console.log(account.#balance); // Error


/ ***************************************************       🔍 Now Understand What Happened ***************************************************/

/*
🔒 Encapsulation (Data Protection)
What did we protect?

#balance

It is private.
Outside world CANNOT access it directly:

account.#balance ❌ Error

The only way to modify balance is through:

deposit()
withdraw()

👉 This protects internal data.

That is Encapsulation.
*/


/*
🎭 Abstraction (Hiding Complexity)

When user writes:

account.deposit(500);

User does NOT see:
    Balance validation
    Internal calculation
    Data modification logic

User only sees simple method.

Complexity is hidden.

That is Abstraction.
*/

// NOTE:-- User interacts with public methods only.

/*
Quick Difference:

Encapsulation → Protects internal data.
Abstraction → Hides internal implementation.

Encapsulation is about SECURITY.
Abstraction is about SIMPLICITY.
*/