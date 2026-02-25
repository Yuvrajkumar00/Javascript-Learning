/* ================================================
            INHERITANCE IN JAVASCRIPT
================================================ */ 

/***************************************************
            What is Inheritance? 
***************************************************/

// Inheritance is a mechanism where one class acquires properties and methods of another class.

// It helps in:
    // Code reusability
    // Logical hierarchy
    // Avoiding repetition
    // Extending functionality

/*

📌 2. Basic Syntax of Inheritance

In JavaScript, inheritance is achieved using:
    class
    extends
    super
*/


/***************************************************
Two ways of Inheritance in Javascript(Using class)
***************************************************/

/*
1️⃣ Inherit Parent Class WITHOUT Creating Child Constructor
*/ 

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

// Child class WITHOUT constructor
class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }
}

const dog1 = new Dog("Tommy");

dog1.speak(); // Tommy makes a sound
dog1.bark();  // Tommy barks

/*
🧠 What Happens Internally?

Dog extends Animal
Since Dog has no constructor:
    JavaScript automatically calls Animal's constructor
this.name is inherited
All parent methods are available
*/



/*
2️⃣ Inherit Parent Class WITH Creating Child Constructor
*/ 

// NOTE:-- 👉 If the child needs its own constructor (extra properties),you must call super() first.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

// Child class WITH constructor
class Dog extends Animal {
    constructor(name, breed) {
        super(name);   // 🔴 Must call super() first
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is a ${this.breed} and barks`);
    }
}

const dog2 = new Dog("Rocky", "Labrador");

dog2.speak(); // Rocky makes a sound
dog2.bark();  // Rocky is a Labrador and barks


/*
VERY IMPORTANT RULES (Exam + Interview Focus)
🔴 1. super() is mandatory

If you define constructor in child, you MUST call:
super();

Otherwise ❌ Error:
ReferenceError: Must call super constructor before using 'this'


🔴 2. super() must be first line

constructor(name) {
    super(name); // Always first
    this.age = 5;
}

You cannot use this keyword before super().

🔴 3. Methods are inherited via Prototype

Behind the scenes:

Dog.prototype → Animal.prototype

JavaScript uses Prototype Inheritance internally, even with class.

*/