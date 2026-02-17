/**********************************************
                ARRAY PRACTICE
**********************************************/ 

/ ================ Problem 1: ============== /
//Create an array containing different types of teas.

let teas = ["Chamomile Tea", "Oolong Tea", "Herbal Tea", "Black Tea", "Green Tea"];
// console.log(teas);


/ ================ Problem 2: ============== /
// Add "White Tea" to the existing list of teas

teas.push("White Tea");
// console.log(teas);


/ ================ Problem 3: ============== /
// Remove "Oolong Tea" from the list of teas.

let index = teas.indexOf("Oolong Tea");
if (index > -1) {
    teas.splice(index, 1);
}
// console.log(teas);


/ ================ Problem 4: ============== /
// Filter the list to only include teas that are caffeinated.

let caffinatedTeas = teas.filter((cafinated) => cafinated !== "Herbal Tea" );
// console.log(caffinatedTeas);


/ ================ Problem 5: ============== /
// Sort the list of teas in alphabetical order.

let sortedTea = teas.sort();
// console.log(sortedTea);


/ ================ Problem 6: ============== /
// Use a for loop to print each type of tea in the array.

for (let i = 0; i < teas.length; i++) {
    // console.log(teas[i]);
}


/ ================ Problem 7: ============== /
// Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").

let countOfCaffinatedTea = 0;
for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== "Herbal Tea") {
        countOfCaffinatedTea++;
    }
}
// console.log(countOfCaffinatedTea);


/ ================ Problem 8: ============== /
// Use a for loop to create a new array with all tea names in uppercase.

let uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
    uppercaseTeas.push(teas[i].toUpperCase());
}
// console.log(uppercaseTeas);


/ ================ Problem 9: ============== /
// Use a for loop to find the tea name with the most characters.
let mostCharacterTea = teas[0];
for (let i = 1; i < teas.length; i++) {
    if (teas[i].length > mostCharacterTea.length) {
        mostCharacterTea = teas[i];
    }
} 
// console.log(mostCharacterTea);

/ ================ Problem 10: ============== /
// Use a for loop to reverse the order of teas in the array.

let reverseTeas = [];
for (let i = teas.length-1; i >= 0; i--) {
    reverseTeas.push(teas[i]);
}
// console.log(reverseTeas);
