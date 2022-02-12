"use strict"

let counter = 0
while (counter < 5) {
    // counter = counter + 1;
    counter++;
    console.log(counter);
}

for (let counter = 0; counter < 5; counter++) {
    console.log(counter);
}

for (let i = 1; i <= 10; i++) {
    i += 2;
    console.log("i", i);
}