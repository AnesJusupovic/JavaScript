"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const dataElement = document.getElementById("date-countdown")
    dataElement.addEventListener("click", () => {
        dataElement.innerText = "2020"
        console.log("dataElemnt was clicked")
    })

    dataElement.addEventListener("mouseenter", () => {
        dataElement.innerText = "2024"
    })

    const contactButton = document.getElementById("contact-me")

    contactButton.addEventListener("click", (a) => {
        console.log(a)
        alert("Kontakt wurde geklickt!")
    })
})