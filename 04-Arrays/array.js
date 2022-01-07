"use strict"

let student1 = "Max Müller";
let student2 = "Monika Müller";
let student3 = "Max Müller";

console.log(student1, student2, student3)
/**
 * Mit einem Array können wir z.B. eine komplette Teilnehmerliste
 * speichern!
 */

let students = [
    "Max Müller",
    "Erika Mustermann",
    "Annika Müller",
    "Max Mustermann"
]
console.log(students)

// Was ist der Typ von einem Array?
console.log(typeof students)
console.log(students instanceof Array)

// Wie viele Elemente sind in dem Array
console.log(".length", students.length);

// Auf ein einzelnes Element zugreifen
console.log("[0]", students[0]);
console.log("[100]", students[100]);

// Elemente hinzufügen
students.push("Joker", "Joker 2");