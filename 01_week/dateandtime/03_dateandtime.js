// 2. Setting Date & Time (Setter Methods)

// NOTE: In Date setter methods, we can pass both numbers and numeric strings as arguments.
// JavaScript automatically converts numeric strings into numbers due to type coercion.
// However, it is recommended to pass numbers for better clarity and to avoid unexpected errors.


// 1. Date Set Methods
console.log("Date Set Methods");
let date = new Date();

// Setting Year 
console.log(date.setFullYear(2020)); // 2020 Returns updated timestamp (milliseconds since Jan 1, 1970)
console.log(date); // it is printing direct object

// Setting Month
console.log(date.setMonth(11)); // 0-11 (0 = January) Returns updated timestamp (milliseconds since Jan 1, 1970)
console.log(date); // it is printing direct object

// Setting Date
console.log(date.setDate(30)); // 1-31 Returns updated timestamp (milliseconds since Jan 1, 1970)
console.log(date); // it is printing direct object

// NOTE:-- Setting date me setDay method nahi hota


// 2. Time Set Methods
console.log("Time Set Methods");

// Setting Hours
console.log(date.setHours(7)); // 0-23 Returns updated timestamp (milliseconds since Jan 1, 1970)
console.log(date); // it is printing direct object

// Setting Minutes
console.log(date.setMinutes(30)); // 0-59 Returns updated timestamp (milliseconds since Jan 1, 1970)
console.log(date); // it is printing direct object

// Setting Seconds
console.log(date.setSeconds(15)); // 0-59 Returns updated timestamp (milliseconds since Jan 1, 1970)
console.log(date); // it is printing direct object

// Setting Milliseconds
console.log(date.setMilliseconds(777)); // 0-999 Returns updated timestamp (milliseconds since Jan 1, 1970)
console.log(date); // it is printing direct object
