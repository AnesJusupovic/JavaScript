"use strict"

// DIe ausführliche Schreibweise für eine anonyme Funktion
plus = (a) => {
    return a + 5;
}
console.log(plus5(4))

// Wenn die FUnktion exakt einen Parameter hat (wichtig!!!),
// lässt man oft die runden Klammern weg
plus5b = b => {
    return a + 5;
}
console.log(plus5(4));

// Wenn eine Funktion nur aus einer Codezeile besteht, 
// können wir die geschweiften Klammern sowie das return
// weglassen
plus5 = a => a + 5
console.log(plus5(4))