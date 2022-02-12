"use strict"

let students1 = ["Torsten", "Laura"];

let students2 = ["Tobias", "Anna", "Michelle"]

if (students1.indexOf("Torsten") >= 0 || students1.indexOf("Torsten") >= 0) {
    console.log("Torsten ist eingeschrieben")
} else {
    console.log("Torsten ist nicht eingeschrieben!")
}

if (students1.indexOf("Felix") >= 0 || students1.indexOf("Felix") >= 0) {
    console.log("Felix ist eingeschrieben")
} else {
    console.log("Felix ist nicht eingeschrieben!")
}

let newStudent = "Tom";

if (students1.length > students2.length) {
    students2.push(newStudent);
} else if (students2.length > students1.length) {
    students1.push(newStudent);
}

console.log(students1)
console.log(students2)

let number;
number = students2.indexOf("Tobias");
students2.splice(number, 1)
console.log(students2)

number = students1.indexOf("Torsten");
students1.splice(number, 1);
console.log(students1);

let numberOfStudents = 5;

if (numberOfStudents === 1) {
    console.log("Die kosten des Sprachkurses betragen für die Person 40Euro");
} else if (numberOfStudents === 5) {
    console.log("Die kosten des Sprachkurses betragen für eine einzel Person 25 Euro!")
} else if (numberOfStudents === 6) {
    console.log("Die kosten des Sprachkurses betragen für eine einzel Person 15 Euro!");
} else {
    console.log("Hierzu gibt es keine Preise!");
}