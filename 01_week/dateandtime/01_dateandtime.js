// 1. Creating a Date (Ways to Create Date Object)

// 1. No Arguments (Current Date & Time)
let now = new Date();  // Current Date and Time

// 2. Date String (ISO or other formats)
let date1 = new Date("2025-04-18T23:11:00"); // ISO fromat (recommended)
let date2 = new Date("February 11, 2026 23:00:00"); // Long format
let date3 = new Date("2026/02/11 23:15:00"); // Slash format (less reliable)

// 3. Numbers: new Date(year, monthIndex, day, hours, minutes, seconds, milli seconds)
let date4 = new Date(2026, 2, 11, 23, 19, 0); // February 11, 2026, 11:19:00

// 4. Milliseconds Since Epoch (Unix timestamp)
let date5 = new Date(1770833509997); // Milliseconds since Jan 1, 1970

// 5. Copy Another Date
let original = new Date("2026-02-11");
let copy = new Date(original);

// console.log(now);
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);
console.log(original);
console.log(copy);