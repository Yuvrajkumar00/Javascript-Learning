/******************** FOR LOOP ********************/

// A for loop is used when we know in advance
// how many times the loop should run.

for (let i = 0; i <= 5; i++) {
  console.log(`Value of i: ${i}`);
}

/******************** BREAK EXAMPLE ********************/

// break stops the loop completely.
// when the specified condition is met.
// After this point, no further values will be printed.

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("Detected 5, stopping the loop...");
    break; // loop stops here
  }

  console.log(i);
}

/******************** CONTINUE EXAMPLE ********************/

// continue skips only the current iteration
// and continues with the next iteration.

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("Skipping value 5...");
    continue; // skips only this iteration
  }

  console.log(i);
}

/******************** WHILE LOOP ********************/

// A while loop runs as long as the condition is true.
// Useful when the number of iterations is not fixed.

let i = 0;

while (i <= 10) {
  console.log(`Value of index: ${i}`);

  // increment by 2 each time
  i += 2;
}

/******************** DO...WHILE LOOP ********************/

// The do...while loop runs at least once,
// even if the condition is false.

let idx = 11;

do {
  console.log(`idx is ${idx}`);
  idx++;
} while (idx <= 10);
