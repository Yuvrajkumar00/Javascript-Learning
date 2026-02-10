let score = 40000000;
let new_score = 465.5966;
let num = "10.56";

//Method
let my_string = score.toString();  //toString() is used to convert a number into a string.
//NOTE:-- This is used when we confirm inside variable value is number then we use it.Otherwise we use String() method and we also use this for converting number into binary.
console.log(my_string);
console.log(typeof my_string);

let my_fixed = score.toFixed(2);  //toFixed jo hai wah decimal ke bad kitna zero hona chahiye woh define karta hai.
console.log(my_fixed);

let my_precision = new_score.toPrecision(4);  //toPrecision jo hai wah yah decide karta hai kitna precise number chahiye
console.log(my_precision);

let my_localstring = score.toLocaleString("en-IN");  //toLocalString ka kam jo hai wah counting number ko united state ya indian state ke anusar change karna hota hai.
console.log(my_localstring);

let my_parseInt = parseInt(new_score);  //parseInt() ka kaam string ko integer number me convert karna hota hai. Agar decimal value ho to ye decimal part hata deta hai. 
//NOTE:-- parseInt() is mainly designed for strings, but if you pass a number, JavaScript first converts it to a string internally, then parseInt() reads the integer part
console.log(my_parseInt);

let my_parsefloat = parseFloat(num);  //parseFloat() is used to convert a value (usually a string) into a number, including numbers with decimal points (floating-point numbers). It reads the numeric part from the beginning of the string and returns it as a number.”
console.log(my_parsefloat);