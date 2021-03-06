"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const helpElements = document.querySelectorAll("[data-help]")

    for (const helpElement of helpElements) {
        /*
        if (!helpElement.attributes["data-help"]) {
          continue
        }
        */
        helpElement.addEventListener("click", (event) => {
            event.preventDefault()

            const helpText = helpElement.attributes["data-help"].value
            alert(helpText)
        })
    }

    const cardElements = document.getElementsByClassName("card");
    for (const cardElement of cardElements) {

        // .contains() fragt ab, ob ein Element eine bestimmte Klasse hat
        console.log(cardElement.classList.contains("card"))

        // .add() fügt eine Klasse hinzu
        cardElement.classList.add("bg-success");
        cardElement.classList.add("bg-success")

        // .remove() klasse wird entfernt
        cardElement.classList.remove("bg-success")
        cardElement.classList.remove("bg-success")

        // .toggle() Wenn das Element diese Klasse besitzt, wird sie entfernt ansonsten hinzugefügt.
        cardElement.classList.toggle("bg-warning")
    }
})