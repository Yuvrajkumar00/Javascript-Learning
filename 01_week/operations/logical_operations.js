/******************* Logical Operators *****************/
// 1.Logical AND (&&) //iska matlab hai ki dono condition true hona chahiye.
// 2.Logical OR (||)  //iska matlab hai ki koi bhi ek condition true hona chahiye.
// 3.Logical NOT (!)  //iska kam value ko reverse karna hota hai. ex- yah true ko false me and false ko true me change kar deta hai.

let age = 37;

if (age <= 10 || age >= 60) {
  console.log("You are eligibal for all Reservation Categories.");
} else if (age > 10 && age <= 18) {
  console.log("You are eligibal for some Reservation Categories.");
} else if ( !(age <= 28) ) {
  console.log("You are a fake Reservation.");
} else {
  console.log("You are not eligibal for any Reservation Categories.");
}
