"use strict"

const courses = [
    ["Christian", "Annika"], // Kurs 1 mit 2 Teilnehmern
    ["Julian", "Lisa", "Tobias"] // Kurs 2 mit 3 Teilnehmern
]

function check(courseOne, courseTwo) {
    if (courseOne.length < courseTwo.length) {
        return "The second course has more students";
    } else if (courseOne.length > courseTwo.length) {
        return "The first course has more students";
    } else {
        return "Both courses are same big"
    }
}

console.log(check(courses[0], courses[1]))

function addStudent(name) {

    const smallestCourse = courses[0];
    smallestCourse.push(name);
    console.log(smallestCourse);
}

addStudent("Test");

const LANGUAGE_DE = [
    "hallo",
    "heute",
    "sprachkurs",
    "willkommen",
    "mikrofon",
    "und"
]

const LANGUAGE_EN = [
    "hello",
    "today",
    "language course",
    "welcome",
    "microphone",
    "and"
]

function translateWord(word) {
    let german = false;
    let number;
    if (LANGUAGE_DE.indexOf(word) >= 0) {
        german = true;
    }
    if (german === true) {
        number = LANGUAGE_EN.indexOf(word);
        console.log(LANGUAGE_EN[number]);
    } else {
        number = LANGUAGE_DE.indexOf(word);
        console.log(LANGUAGE_DE[number]);
    }
}

function ucFirst(word) {
    let first = word.charAt(0);
    first.toUpperCase();
    let newWord = first + word.substr(1, word.length);
    return newWord;
}

console.log(ucFirst("test"));