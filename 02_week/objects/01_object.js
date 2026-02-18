/********************* SYMBOL *********************/

// A Symbol creates a unique value.
let mySym = Symbol("mykey1");


/********************* OBJECT CREATION *********************/

let JsUser = {
    name: "Hitesh",
    age: 18,
    [mySym]: "mykey1",   // Symbol used as object key
    location: "Jaipur",
    email: "yuvrajkumar9572@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


/********************* ACCESSING PROPERTIES *********************/

// Dot notation
console.log(JsUser.name);

// Bracket notation (required for symbols or dynamic keys)
console.log(JsUser[mySym]);


/********************* MODIFYING OBJECT *********************/

// Update value
JsUser.email = "newemail@gmail.com";

// Add new property
JsUser.city = "Masaurhi";


/********************* FREEZE OBJECT *********************/

// Prevents modification, deletion, or addition
// Object.freeze(JsUser);


/********************* OBJECT CREATION METHODS *********************/

// Constructor method (rarely used)
let tinderUser = new Object();

// Literal method (recommended)
let tinderUsers = {};


/********************* MERGING OBJECTS *********************/

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// Object.assign()
const obj4 = Object.assign({}, obj1, obj2, obj3);

// Spread operator (modern way)
const mySpread = { ...obj1, ...obj2, ...obj3 };


/********************* OBJECT METHODS *********************/

// Returns keys (array)
const keys = Object.keys(JsUser);

// Returns values (array)
const values = Object.values(JsUser);

// Returns key-value pairs (array of arrays)
const entries = Object.entries(JsUser);

// Checks property existence
const check = JsUser.hasOwnProperty("name");


/********************* OBJECT METHODS (FUNCTION INSIDE OBJECT) *********************/

const user = {
    name: "Yuvraj",
    greet: function () {
        console.log("Hello User");
    }
};

user.greet();


/********************* THIS KEYWORD *********************/

const person = {
    name: "Yuvraj",
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};

person.greet();


/********************* SHORTHAND PROPERTY *********************/

// If variable name and object key name are same,
// you can use shorthand.

// ❌ Different name → shorthand will NOT work

let name = "Yuvraj";
let age = 21;

// Instead of {name: name, age: age}
let userInfo = { name, age };


/********************* DESTRUCTURING *********************/

// Single property
const { location } = JsUser;

// Multiple properties
const { name: userName, age: userAge } = JsUser;
// rename variables during destructuring

// Default value in destructuring
const { country = "India" } = user;
console.log(country);


/********************* NESTED OBJECT DESTRUCTURING *********************/

const student = {
    name: "Yuvraj",
    marks: {
        math: 90,
        science: 85
    }
};

const { marks: { math } } = student;
console.log(math);


/********************* NESTED OBJECT *********************/

const nestedUser = {
    fullName: {
        firstName: "Yuvraj",
        lastName: "Kumar"
    }
};

console.log(nestedUser.fullName.firstName);


/********************* OPTIONAL CHAINING *********************/

// Prevents error if property doesn't exist
console.log(nestedUser?.fullName?.firstName);


/********************* JSON (IMPORTANT) *********************/

// JSON keys and values are always in double quotes

const jsonExample = {
    "name": "Yuvraj",
    "age": 21
};


/********************* LOOPING OBJECT *********************/

// for...in loop (used to iterate object keys)

for (let key in user) {
    console.log(key, user[key]);
}
