// Converting Date to String (Display Methods)

let date = new Date();

// BASIC DISPLAY
console.log("\nBASIC DISPLAY\n");

// 1. toString()
console.log(date.toString());
// Converts the Date object into a readable string 
// in the system's local time zone (full date and time).

// 2. toDateString()
console.log(date.toDateString());
// Returns only the date portion as a readable string
// in the local time zone (no time included).

// 3. toTimeString()
console.log(date.toTimeString());
// Returns only the time portion as a readable string
// in the local time zone (no date included).


// LOCALE BASED
console.log("\nLOCALE BASED\n");


// 4. toLocaleDateString()
console.log(date.toLocaleDateString());
// Returns the date formatted according to the system's
// local region settings (country-specific format).

// 5. toLocaleTimeString()
console.log(date.toLocaleTimeString());
// Returns the time formatted according to the system's
// local region settings.

// 6. toLocaleString()
console.log(date.toLocaleString());
// Returns both date and time formatted according to
// the system's local region settings.


// STANDARD FORMATS
console.log("\nSTANDARD FORMATS\n");


// 7. toISOString()
console.log(date.toISOString());
// Converts the Date object into ISO 8601 string format in UTC.
// Example format: YYYY-MM-DDTHH:mm:ss.sssZ

// 8. toUTCString()
console.log(date.toUTCString());
// Converts the Date object into a readable string
// using UTC (Universal Coordinated Time).

// 9. toJSON()
console.log(date.toJSON());
// Converts the Date object into a JSON-compatible string.
// Used automatically when JSON.stringify() is called.
// Internally, it returns the same format as toISOString().
