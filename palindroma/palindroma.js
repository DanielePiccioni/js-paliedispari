/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
TOOLS:
-chiedere alla persona una parola
-creare una funzioni
-controllare tramite la funzione se quella parola è palindroma
-stampare il risultato
*/


//chiedeer una parola all'utente
const word = prompt("inserisci una parola")
// creare una funzione
function controlword(word){
    //creazione della parola al contrario
    let wordreverse = ""
    for(let i = word.length -1; i >= 0; i--){
        wordreverse += word[i];
    }
    // controllare tramite la funzione se la parola è palindroma
    if(word === wordreverse){
        return true;
    } else{
        return false;
    }
    
}

// stampare il risultato
if(controlword(word)){
    console.log(`La parola ${word} è palindroma`);
    
} else{
    console.log(`La parola ${word} non è palindroma`);
    
}