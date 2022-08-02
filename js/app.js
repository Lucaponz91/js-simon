// Visualizzare in pagina 5 numeri casuali. (con un alert)
let arrayNumeriRandom = []
arrayNumeriRandom = generaNumeri(5)
console.log(arrayNumeriRandom)
const arrayOrdinato = arrayNumeriRandom.sort((a,b)=>a-b)
console.log(arrayOrdinato)

// Dopo che l’utente avrà chiuso l’alert (quindi i numeri non saranno pìu visibili) parte un timer di 30 secondi.
setTimeout(() => {
    const numeriUser = prompt ('Inserisci i numeri precedentementi visualizzati, separati da una virgola, senza spazi')
}, 30000);
// Alla fine dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


// ###### FUNZIONE CHE INSERISCE 6 NUMERI NON DOPPIONI
function generaNumeri(max){
    // creo array (da 16 in questo caso)
    const numeri = []
    // ciclo per creare i numeri
    while (numeri.length < 6) {
        // GENERO UN NUMERO CASUALE DA 1 A 100
        let n = numeroRandom (1, 100)
        // 
        if (!numeri.includes(n)) {
            numeri.push(n)
        }
    }
    // console.log(numeri)
    return numeri
}

// ###### FUNZIONE CHE GENERA NUMERI RANDOM DA MIN A MAX
function numeroRandom (min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

// Alla fine dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.