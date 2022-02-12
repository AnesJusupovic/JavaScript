"use strict"


for (let i = 0; i < 25; i++) {
    console.log("Ich soll im Unterricht nicht stören");
}
let students = ["Max", "Monika", "Franziska", "Bernd", "Tobias", "Andreas"];
let students1;
let students2;
if (students.length % 2 === 0) {
    let length = students.length;
    students1 = students.slice(0, length / 2);
    students2 = students.slice(length / 2, length);
} else {

}

let levels = [
    "A1",
    "A2",
    "B1",
    "B2",
    "C1",
    "C2"
]

let prices = [
    400,
    550,
    600,
    650,
    700
]

let start = levels.indexOf("A1");
let end = levels.indexOf("C1");
let sum = 0;
for (let i = start; i < end; i++) {
    sum += prices[i];
}
console.log(sum);

let sum2 = 0;
for (const value of prices) {
    if (sum2 + value < 1501) {
        sum2 += value;
    } else {
        break;
    }
}

console.log(sum2);

let studentsPerCourse = [
    ["Max", "Monika"], // Erster Kurs
    ["Erika", "Erika"]
]

let sum3 = 0;
for (let now of studentsPerCourse) {
    sum3 += now.length;
}
console.log(sum3);

let remove = "Max";
let ausgetrage = false;
for (let d of studentsPerCourse) {
    let number = d.indexOf(remove);
    if (number >= 0) {
        d.splice(number, 1);
        ausgetrage = true;
    }
}
if (ausgetrage === false) {
    console.log(remove, " kann aus keinem Kurs ausgetragen werden");
}
console.log(studentsPerCourse);