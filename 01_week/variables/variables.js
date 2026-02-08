const accountId = 99988;
let accountEmail = "yuvrajkumar9572@gmail.com";
var accountPassword = "988085";

// accountId = 544;  //After using const we dont's change any values.
console.log(accountId);

accountEmail = "pawankumar9572@gmail.com";  //Always use let variable.
accountPassword = "88084";  //Never use var variable because of issue in block scope and  functional scope.

console.table([accountId, accountEmail, accountPassword]);  //console.table is use for print multiple value at a one time.