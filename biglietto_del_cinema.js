// Dati di esempio
let eta = [30, 40, 70]; // Età delle persone
let numeroPersone = eta.length; // Numero di persone
let acquistoOnline = true; // Booleano per acquisto online

// Prezzi
let prezzoRidotto = 6; // Prezzo ridotto
let prezzoIntero = 8; // Prezzo intero
let scontoOnline = 1; // Sconto per acquisto online

// Prezzo totale iniziale
let prezzoTotale = 0;

// Calcolo del prezzo totale
for (let i = 0; i < numeroPersone; i++) {
    if (eta[i] <= 35 || eta[i] >= 65) {
        prezzoTotale += acquistoOnline ? prezzoRidotto - scontoOnline : prezzoRidotto;
    } else {
        prezzoTotale += acquistoOnline ? prezzoIntero - scontoOnline : prezzoIntero;
    }
}

// Output del prezzo totale
console.log("Il prezzo totale da pagare è: " + prezzoTotale + " euro");