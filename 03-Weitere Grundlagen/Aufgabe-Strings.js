"use strict"

let shopping = "    Apfel, Pfirsich, +++Avocado, Mango   "

// Bei einer Einkaufsliste haben sich ein paar Fehler
// eingeschlichen. Unsere Texterkennung des Scans hat ein 
// paar Leerzeichen zu viel erkannt, sowie ein paar 
// Plus-Zeichen eingelesen, die im Original gar nicht 
// existieren. Das möchten wir korrigieren!


// Aufgabe 1: Entferne die Leerzeichen links und rechts, und
// schreibe das Ergebnis zurück in die Variable "shopping"

// Aufgabe 2: Finde die Position der drei Plus-Zeichen, und
// speichere diese in einer Variablen

// Aufgabe 3: Schneide die 3 Plus-Zeichen aus und gebe das 
// Ergebnis mit einem console.log aus.
// Verwende dazu einmal die .substr()-Funktion, und einmal
// die .slice()-Funktion
// 
// Es soll ausgegeben werden: "Apfel, Pfirsich, Avocado, Mango"
// Tipp: Du wirst hierzu 2 Aufrufe der jeweiligen Funktionen 
// benötigen - einmal bis hin zu den +++-Zeichen, und einmal
// für das Stück danach!

// Aufgabe 4: Schneide die 3 Plus-Zeichen aus. Verwende dazu
// die .replace()-Funktion!


// Aufgabe 5: Jetzt soll die Shopping-Liste ausgegeben werden.
// Wandle die Liste in folgendes Schreibweise um. Platziere
// auch die 2 Striche über / unter der Auflistung, und verwende
// dazu die .repeat()-Funktion!
// 
// --------------------
// Einkaufsliste:
//  - Apfel
//  - Birne
//  - Avocado
//  - Mango
// --------------------
//
// Tipp: Du kannst z.B. mit Hilfe der .replace()-Funktion immer nur ein
// Komma in einen Zeilenumbruch inklusive Bindestrich umwandeln.
// 
// Jetzt hier ist es vollkommen okay, wenn du daher .replace() mehrfach
// hintereinander aufrufst, bis alle Kommas in umgewandelt wurden:
// >> shopping.replace(...).replace(...).replace(...)
// 
// Später lernst du hierfür auch noch eine "elegantere" Methode kennen.
//
// Du darfst wahlweise alles in einem console.log()-Aufruf ausgeben, 
// oder auch mehrere console.log()-Aufrufe verwenden.

// Aufgabe 1
shopping = shopping.trim();

// Aufgabe 2
let position = shopping.indexOf("+++");

// Aufgabe 3
console.log(shopping.slice(17, 20));
console.log(shopping.substring(17, 20));

// Aufgabe 4
shopping = shopping.replace("+++", "");

// Aufgabe 5
console.log("Die Einkaufsliste : ");
shopping = shopping.replace("A", "-  A");
console.log(shopping.replaceAll(",", "\n- "));

