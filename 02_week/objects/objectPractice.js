/**********************************************
                OBJECT PRACTICE
**********************************************/ 

/ ================ Problem 1: ============== /
// Create an object representing a type of tea with properties for name, type, and caffeine content.

const teas = {
    name: "Lemon Tea",
    type: "Green",
    caffeine: "low"
}

console.log(teas);


/ ================ Problem 2: ============== /
// Access and print the name and type properties of the tea object.

console.log(teas.name);
console.log(teas["type"]);


/ ================ Problem 3: =============== / 
// Add a new property origin to the tea object.

teas.origin = "Chaina";


/ ================ Problem 4: =============== / 
// change the caffeine level of the tea object to "Medium".

teas.caffeine = "Medium";


/ ================ Problem 5: =============== / 
// Remove the type property from the tea object.

delete teas.type;


/ ================ Problem 6: =============== / 
// Check if the tea object has a property origin.

console.log(teas.hasOwnProperty("origin"));
// or
console.log("origin" in teas);


/ ================ Problem 7: =============== / 
// Use a for...in loop to print all properties of the tea object.

for (const key in teas) {
    // console.log(`${key} : ${teas[key]}`);
}


/ ================ Problem 8: =============== / 
// Create a nested object representing different types of teas and their properties.

const tea = {
    lemonTea: {
        name: "Lemon Tea",
        type: "Green",
        origin: "Chaina"
    },
    greenTea: {
        name: "Green Tea",
        type: "Green",
        origin: "Assam"
    },
    blackTea: {
        name: "Black Tea",
        type: "Black",
        origin: "Assam"
    }
}
console.log(tea);


/ ================ Problem 9: =============== / 
// Create a copy of the tea object.

// const teaCopy = {...tea};
// or
const teaCopy = Object.assign({}, tea);
teaCopy.greenTea.origin = "Chaina";
console.log(teaCopy);


/ ================ Problem 10: =============== / 
// Add a custom method describe to the tea object that returns a description string.

tea.description = () => {return "This is a Method";
}
console.log(tea.description());


/ ================ Problem 11: =============== / 
// Merge two objects representing different teas into one.

const mergeObject = {...teas, ...tea};
console.log(mergeObject);
