/* ========================================================================  
                    What is a Class in JavaScript?
========================================================================== */ 

// A class is a blueprint (template) used to create multiple similar objects.
/*
Think like this, 
If you open a car factory in Mumbai, you don’t build every car from scratch with new logic.
You create a design/blueprint once — and then manufacture many cars from it.

That blueprint = Class
*/

class Car {
    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    
    drive() {
        console.log(this.name + " is driving at " + this.speed);
    }
}

/*
What is happening here?

class Car → blueprint created

constructor() → runs when object is created

this → refers to current object

drive() → method shared by all objects
*/


/* ========================================================================  
                    What is a Object in JavaScript?
========================================================================== */ 

// An object is a real instance created from a class.
// Blueprint is class.
// Actual car produced from factory = object.

let car1 = new Car("BMW", "Blue", "100km/h");
let car2 = new Car("Audi", "Black", "120km/h");

console.log(car1);
car1.drive();

// NOTE:-- In class if we forgot to write new keyword then it give Error so always remember.

/*
Here:

car1 and car2 are objects

They have same structure

But different values
*/