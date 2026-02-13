// 2. Getting Date & Time (Getter Methods)

// 1. Date Get Methods
console.log("Date Get Methods");
let date = new Date();

// Getting Year
console.log(date.getFullYear()); // 2026

// Getting Month
console.log(date.getMonth()); // 0-11 (0 = January)

// Getting Date
console.log(date.getDate()); // 1-31

// Getting Day
console.log(date.getDay()); // 0-6 (0 = Sunday)


// 2. Time Get Methods
console.log("Time Get Methods");

// Getting Hours
console.log(date.getHours()); // 0-23

// Getting Minutes
console.log(date.getMinutes()); // 0-59

// Getting Seconds
console.log(date.getSeconds()); // 0-59

// Getting Milliseconds
console.log(date.getMilliseconds()); // 0-999


// 3. Other Important Get Methods
console.log("Other Important Get Methods");

// Get Time zone difference (UTC vs Local Time)
console.log(date.getTimezoneOffset()); // (UTC - Local Time) it means ki yah ye batata hai ki aap ka country me time UTC se kitna aage ya piche chal raha hai and also ye hame time minutes me deta hai.

// Getting Time in Milliseconds
console.log(date.getTime()); // Milliseconds since Unix Epoch

// Getting Current Time in Milliseconds
console.log(Date.now()); 
// Milliseconds since Unix Epoch
// Does NOT create a Date object
// Directly returns a number (timestamp)
// Faster than new Date().getTime()