console.log("klappts?")

/* 
Frage

per Range Schriftgröße auswählen
    rem 0-5

per Dropdown Schrift-Family auswählen
    1. BodoniModa
    2. OpenSans
    3. Roboto
    4. YuseiMagic 
    5. SansSerif ???

Per Input Text eingeben

Output Feld mit Formatiertem Text 


*/

// Variablen 

let inputFontSize = document.querySelector("#inputFontSize");
let inputFontFamily = document.querySelector("#inputFontFamily");
let inputText = document.querySelector("#inputText");

console.log(inputFontSize, inputFontFamily, inputText);

let outputFeld = document.querySelector("#outputFeld");

// Eventlistener
let aktivate = inputFontFamily.addEventListener("change", neuesFormatierung);
    aktivate = inputFontSize.addEventListener("change", neuesFormatierung);
    aktivate = inputText.addEventListener("change", neuesFormatierung);


// Funktion neueFromatierung

function neuesFormatierung() {
console.log("in Funktion + eventlistener geht");

inputGröße = inputFontSize.value;
console.log(inputGröße);
inputSchriftArt = inputFontFamily.value;
console.log(inputSchriftArt);
inputBuchstaben = inputText.value;
console.log(inputBuchstaben);

ergebnis = `font-size:${inputGröße}rem; ${inputSchriftArt} `;
console.log(ergebnis);

outputFeld.innerHTML = inputBuchstaben;
outputFeld.style = ergebnis;

}