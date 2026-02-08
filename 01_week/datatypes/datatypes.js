"use strict";  //treat all JS code as newer version

//alert( 3 + 3);   //we are using node js, not browser
//prompt('Put your value');    //we are using node js, not browser

// NOTE:- typeOf is used for checking datatype 

// TWO TYPE OF DATATYPE :--

// 1.Primitve data type
let my_num = 98989;  //Number
console.log(typeof my_num);

let my_str = "Yuvraj kumar";  //String
console.log(typeof my_str);

let my_boolean = true;  //Boolean
console.log(typeof my_boolean);

let my_undefined;  //Undefined
console.log(typeof my_undefined);

let my_null = null;  //null
console.log(typeof my_null);

let my_bigint = 5656576576574687n;  //It is use for write a very big number
console.log(typeof my_bigint);

let my_symbol = Symbol();  //It is used for making unique value
console.log(typeof my_symbol);


// 2.Non-Primitve(Reference) data type
let my_array = ["yuvi", "manoj", "rahul"];  //Array
console.log(typeof my_array);

let my_object = {    //Object
    name: "yuvraj",
    age: 18,
    city: "masaurhi"
}
console.log(typeof my_object);

function my_function() {   //Function
    console.log(typeof my_function);
    
}
my_function();