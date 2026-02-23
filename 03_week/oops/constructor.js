/* =================================================
            What is Constructor in Javascript
================================================= */

/*
A constructor is a special method inside a class that:
    =>Runs automatically
    =>Executes when we create an object using the new keyword
    =>Initializes object properties
    =>Prepares the object for use

👉 Think of it as an object setup function.
*/

/*
Important Rule:
- A class can have only ONE constructor.
- If you try to create multiple constructors, it will throw an error.
*/


/* =================================================
    Why Do we need a Constructor in Javascript
================================================= */

// When we create multiple objects from a class:

class Person {

    // Constructor runs automatically
    constructor(name, age) {
        this.name = name;   // Assigning name
        this.age = age;     // Assigning age
    }

    // Shared method
    introduce() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating multiple objects
const person1 = new Person("Yuvraj", 20);
const person2 = new Person("Rahul", 22);
const person3 = new Person("Aman", 25);

person1.introduce(); // Name: Yuvraj, Age: 20

/*
Each object needs:
    Different name
    Different age

The constructor helps assign those values properly.
*/


// Key Characteristics of constructors:

/*
1. Purpose: To create and initialize objects.
2. Automatic invocation: Called automatically when an object is created using the new keyword.
3. Initialization: Sets initial values for object properties.
4. Implicit constructor: If a class does not have a constructor, JavaScript provides a default empty constructor.
*/

/*
Common Mistake:

Forgetting "new"

Wrong:
const p = Person("Yuvraj", 20); // Error

Correct:
const p = new Person("Yuvraj", 20);
*/