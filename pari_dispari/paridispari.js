/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/* 
TOOLS:  
-l'utente sceglie pari o dispari
-l'utente sceglie un numero da 1 a 5
-numero casuale dal computer da 1 a 5
- somma dei numeri 
-creaare una funzione per verificare se è pari o dispari
-staampare il risultato
*/

//l'utente scegli tra pari e dispari
let scelta = prompt("scegli pari o dispari")
//l'utente sceglie un numero da 1 a 5
let numeroscelto = Number(prompt("inserisci un numero da 1 a 5"));

console.log(`hai scelto ${scelta} e il numero ${numeroscelto}`);

// numero casuale del computer da 1 a 5
let numerocomputer = Math.floor(Math.random() * 5)+1;

console.log(`Il computer ha scelto il numero ${numerocomputer}`);

// somma dei numeri
let somma = numeroscelto + numerocomputer

console.log(`la somma di questi numeri è ${somma}`);

//controllo se il numero è pari o dispari
function verifica(somma){
    if (somma % 2 === 0){
        return "pari";
    } else {
        return "dispari"
    }
}
let risultato = verifica(somma);
console.log(risultato);

//stampare il risultato 