"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const firstCardHeader = document.getElementsByClassName("card-header")[0];

    /*
    console.log(firstCardHeader.attributes)
    */

    console.log(firstCardHeader.attributes["class"])
    console.log(firstCardHeader.attributes.class)
    console.log(firstCardHeader.attributes["data-extra"])

    const dataExtraAttribute = firstCardHeader.attributes["data-extra"].value
    console.dir(dataExtraAttribute)
})