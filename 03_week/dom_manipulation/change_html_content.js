/* =======================================================================================
                                CHANGE HTML CONTENT
=========================================================================================*/

// There are three ways of changing HTML content:--

let h1 = document.querySelector("#heading-1");
let div = document.querySelector(".container");

// 1. First way using innerText
// div.innerText = "I am changing inner text of this heading using innerText property";


// 2. Second way using innerContent (Most Recommended)
// div.textContent = "I am changing inner text of this div using innerContent property";


// 3. Third way using innerHTML
// div.innerHTML = "I am changing inner text of this div using innerHTML property";


// NOTE:--  1. Always use textContent in real world because it is good.
// 2. textContent is show hidden text and it is also don't show html tag
// 3. innerText show only visible text and it does't show html tag
// 4. innerHTML show hidden text and also show all html tag.

// Check it using console.log 
console.log(div.innerText);
console.log(div.textContent);
console.log(div.innerHTML);
