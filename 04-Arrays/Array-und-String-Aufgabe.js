"use strict"

// let students = "Max, Monika, Erika, Moritz, Anton";

// Hier steht einfach nur ein Satz drinnen - die \x-Schreibweise

let students1 = "Max, Monika, Erika, Moritz, Anton";
console.log(students1);
let studentsArray = students1.split(", ");
let pos = studentsArray.indexOf("Erika");
console.log(pos);
studentsArray.splice(pos, 1);
students1 = studentsArray.join(", ");
console.log(students1)