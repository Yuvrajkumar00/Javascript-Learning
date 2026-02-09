// 3.Relational operators
console.log("Relational  operaters");

console.log(4 > 9);         //greater than
console.log(4 < 9);         //less than
console.log(9 >= 9);        //greater than equalto
console.log(4 <= 9);        //less than equalto
console.log(4 != 9);        //not equalto
console.log("9" == 9);      //double equalto
console.log(false == 0);    //double equalto
console.log("9" === 9);     //triple equalto
console.log(false === 0);   //triple equalto

// avoid this type of conversion

console.log(null > 0);      //greater than   
console.log(null == 0);     //double equalto
console.log(null >= 0);     //greater than equalto

// The reason is that an equality check == and comparisons >, <, >=, <= work differently.
// Comparisons convert null to a number, treating it as 0.
//That's why (3) null >= 0 us true and (1) null >0 is false.

console.log(undefined > 0);      //greater than  
console.log(undefined < 0);      //less than  
console.log(undefined == 0);     //double equalto
console.log(undefined >= 0);     //greater than equalto