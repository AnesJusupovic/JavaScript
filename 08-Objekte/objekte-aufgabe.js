"use strict"

let DE_TO_EN = {
    hallo: "hello",
    heute: "today",
    sprachkurs: "language course",
    willkommen: "welcome",
    mikrofon: "mikrofon",
    und: "and"
}

console.log(DE_TO_EN["hallo"])

const students = [
    { firstname: "Max", lastname: "Mustermann", age: 21 },
    { firstname: "Laura", lastname: "Müller", age: 25 },
    { firstname: "Julia", lastname: "Schreiber", age: 30 },
    { firstname: "Tobias", lastname: "Lieb", age: 19 },
]

function sumAge(studentsList) {
    let sum = 0;
    for (const studentNow of studentsList) {
        sum += studentNow.age;
    }
    return sum;
}

console.log(sumAge(students))

students.push({ firstname: "Peter", lastname: "Meier", age: null })
console.log(students);

console.log(sumAge(students))