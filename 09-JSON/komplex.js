"use strict"

// https://github.com/r-spacex/SpaxeX-API
// rockets.json: https://api.spacexdata.com/v3/rockets

const fs = require("fs");
const rocketsAsString = fs.readFileSync("spacex/rockets.json", { encoding: "utf-8" });

const rockets = JSON.parse(rocketsAsString);
console.log("rocketsAsString:", rocketsAsString);

console.log(rockets[0])