"use strict"

const fs = require("fs");

/*
fs.readdir(__dirname, (err, files) => {
    console.log(files)
})
*/

console.log("A");
fs.readFile("daten.txt", { encoding: "utf-8" }, (err, data) => {
    console.log(data)
})