"use strict";

const items = ["Obst", "Gemüse"];

console.log("items[0]:", items[0]);
console.log('items["0"]:', items["0"]);
for (const i in items) {
    console.log("i:", typeof i, i);

    if (i === "0") {
        continue
    }

    console.log("i:", typeof i, i);
    console.log("Vorheriges Element:", items[i + 1]);
}

let sum = 0
const shoppingList = [123, 43, 50];

for (const shoppingItem of shoppingList) {
    sum = sum + shoppingItem;
}
console.log("Die Summe ist:", sum);