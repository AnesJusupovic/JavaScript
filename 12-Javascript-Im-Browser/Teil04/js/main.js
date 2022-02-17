"use strict"

// Das document Object
console.log("ohne Callback:", document.readyState)

// DOMContentLoaded: Alle HTML-Element wurden erstellt,
// aber Bilder, etc. müssen evtl. noch geladen werden
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded:", document.readyState)
    const dataElement = document.getElementById("date-countdown")
    dataElement.innerHTML = "<strong>Das hier ist ein Test</strong>";
    console.log(dataElement)
})

// Die Seite ist fertig geladen!
window.addEventListener("load", () => {
    console.log("load:", document.readyState)
})