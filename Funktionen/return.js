"use strict"

const items = [15, 25, 30]

function summe(liste) {
    let sum = 0;
    for (let element of liste) {
        sum += element;
    }
    return sum;
}

let itemsSum = summe(items)
console.log(itemsSum === 70)