let cateto1 = 5;
let cateto2 = 7;

let quadrato1 = cateto1 ** 2;
let quadrato2 = cateto2 ** 2;

let somma = quadrato1 + quadrato2;

let ipotenusa = Math.sqrt(somma);

let risultato = ipotenusa.toFixed(2);

console.log(risultato);