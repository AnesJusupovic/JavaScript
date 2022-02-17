"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const text = document.getElementById("clicks")
    const clickbutton = document.getElementById("click-button")
    const resetbutton = document.getElementById("reset-button")


    let a = 0;
    clickbutton.addEventListener("click", () => {
        a++;
        text.innerText = "Anzahl Klicks: " + a;
    })

    resetbutton.addEventListener("click", () => {
        a = 0;
        text.innerText = "Anzahl Klicks: " + a;
    })

})