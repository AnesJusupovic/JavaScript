"use strict"

const fs = require("fs");
const launches = JSON.parse(fs.readFileSync("spacex/launches.json", { encoding: "utf-8" }))

console.log("Anzahl launches:", launches.length)
    // 111 launches
let sum = 0;
for (const a of launches) {
    if (a["launch_success"] === true) {
        sum++;
    }
}
// 103 erfolgreich
// 8 nicht erfolgreich
console.log(sum)

let newSum = 0;
console.log(launches[0]["rocket"]["second_stage"]);

const secondStage = launches["rocket"]["second_stage"]

for (const payload of secondStage["payloads"]) {
    const kg = payload["payload_mass_kg"];
    console.log("kg:", kg)
}

console.log(newSum);