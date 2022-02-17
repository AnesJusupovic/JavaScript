"use strict"

const https = require("https")
const http = require("http")

const url = "https://api.spacexdata.com/v4/launches/latest"

https.get(url, (res) => {

    let data = ""
    res.on("data", chunk => {
            console.log("chunk", chunk)
            data += chunk;
        })
        // console.log(res.statusCode);

    res.on("end", () => {
        const dataAsObj = JSON.parse(data)
        console.log(dataAsObj["name"])
    })
});