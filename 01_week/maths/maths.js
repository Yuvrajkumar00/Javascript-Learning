//Methods
let my_abs = Math.abs(-4);  //It will change negative value into a positive value.
console.log(my_abs);

let my_round = Math.round(4.8);  //It will round of a decimal value.
let my_round1 = Math.round(4.4);
console.table([my_round, my_round1]);

let my_floor = Math.floor(4.8);  //floor ka kam hai ki decimal value me decimal ke pahale jo bhi value hoga use print kar do.
let my_ceil = Math.ceil(4.4);  //ceil ka kam hai ki decimal ke pahale jo bhi value hai usse ek bhi value  agar decimal ke bad jayada hota hai to direct uska next number print kar deta hai.
console.table([my_floor, my_ceil]);


let my_random = Math.random();  //Math.random ka kam hai 0 se 1 tak ke bich me value ko print karta hai.
console.log(my_random);

let my_randoms = Math.random() *10;  //Yaha pe Math.random ka kam hai 0 se 10 tak ke bich me value ko print karna.
console.log(my_randoms);

//Yaha pe Math.random ka kam hai minimum 10 se 20 tak ke bich me value ko print karna.
let max = 20;
let min = 10;
let my_randomNum = Math.floor(Math.random() * (max - min +1)) + min;
console.log(my_randomNum);