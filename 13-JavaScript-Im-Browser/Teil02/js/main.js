"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    console.log(heading)

    const cardHeadings = document.querySelectorAll(".card div.card-header")
    for (const e of cardHeadings) {

    }
    console.log(cardHeadings)

    const container = document.querySelector(".container")
    const containerHeading = container.querySelectorAll("h1");

    console.log(containerHeading)
})