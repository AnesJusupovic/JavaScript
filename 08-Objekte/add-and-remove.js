"use strict"

const student = {
    name: "Max Mustermann",
    age: 21
}

student.subject = "Englisch"

student["interestIn"] = "Bulgarian"
delete student.age

console.log("student", student)