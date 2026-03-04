/* =======================================================================================
                                HTML SELECTION
=========================================================================================*/

// There are mostly four ways of selecting HTML

// 1. First Way using getElementById, it is mostly used for selecting any html element based on Id.

// Example:--

let selectH1Tag = document.getElementById("heading-1");
// console.log(selectH1Tag);


// 2. Second Way using getElementsByClassName, it is mostly used for selecting any html element based on class.

// Example:--

let selectParaTag = document.getElementsByClassName("para"); // select multiple element
// console.log(selectParaTag);


// 3. Third Way using getElementsByTagName, it is mostly used for selecting any html element based on tag name.

// Example:--

let selectPTag = document.getElementsByTagName("h1");
// console.log(selectPTag);


// 4. Fourth Way using querySelector, it is mostly used for selecting any html element based on tag, id and class.

// Example:--

// let selectH2Tag = document.querySelector("#heading-2"); // select single element
// console.log(selectH2Tag);

// let selectH2Tag = document.querySelector("p"); // select first element based on same class
// console.log(selectH2Tag);

let selectH2Tag = document.querySelectorAll("p"); // select all element based on same class
console.log(selectH2Tag);


// NOTE:-- 
    // 1. getElementsByClassName always give HTMLCollection.(it not like array)
    // 2. querySelectorAll always give NodeList. (it is like array)

// Always Remember , in professional way i always prefer queryselectorAll for selecting any element