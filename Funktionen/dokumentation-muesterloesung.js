"use strict"

const courses = [
    ["Christian", "Annika"], // Kurs 1 mit 2 Teilnehmern
    ["Julian", "Lisa", "Tobias"] // Kurs 2 mit 3 Teilnehmern
]

/**
 * checks two courses and gives the course with less students back
 * @params {list, list} - List one, List two
 * @returns {string} - Returns the course with more students back
 */
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

/**
 * adds a student to the course with the less students
 * @params {string} - The name of the student, who is added in the list
 */
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

/**
 * @param {string} - word which should be translated
 * @return {*} - nothing
 */
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


/**
 * Make the first letter of a word big
 * @param {string} word - the word, which I want to use to make the first letter big
 * @returns {string} - give the word with the first letter upper back
 */
function ucFirst(word) {
    let first = word.charAt(0);
    first.toUpperCase();
    let newWord = first + word.substr(1, word.length);
    return newWord;
}

console.log(ucFirst("test"));