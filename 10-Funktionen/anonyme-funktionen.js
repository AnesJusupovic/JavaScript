"use strict"

// 1. Art
// function declaration
function sayHello() {
    console.log("sayHello!");
}
sayHello();

// 2. Artm anonyme Funktion
// Man sagt: function expression
const sayHello2 = function() {
    console.log("sayHello2!");
}

sayHello2();

// 3. Art, anonyme Funktion
// Man sagt: function expression
const sayHello3 = () => {
    console.log("sayHello3!")
}

sayHello3();