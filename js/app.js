// Visualizzare in pagina 5 numeri casuali. (con un alert)
let arrayNumeriRandom = []
let numeriUser = []
let numeriAzzeccati = []


arrayNumeriRandom = generaNumeri(5)
console.log(arrayNumeriRandom)
const arrayOrdinato = arrayNumeriRandom.sort((a,b)=>a-b)
console.log(arrayOrdinato)
alert(arrayOrdinato)

// Dopo che l’utente avrà chiuso l’alert (quindi i numeri non saranno pìu visibili) parte un timer di 30 secondi.
// Alla fine dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


setTimeout(() => {
    let numeriUser = prompt ('Inserisci i numeri precedentementi visualizzati, separati da una virgola, senza spazi')
    console.log(numeriUser)
    // CICLO PER MOSTRARE I NUMERI GIUSTI
    for( let i = 0; i < arrayOrdinato.length; i++){
        if(arrayOrdinato.includes(numeriUser[i])){
          numeriAzzeccati.push(numeriUser[i])
          
        }   
      }

    if (arrayOrdinato == numeriUser) {
        alert('Hai vinto!')
    } else {
        alert("Hai perso :( Hai indovinato i seguenti numeri: " + numeriAzzeccati)
        console.log(numeriAzzeccati)
    }
}, 3000);


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// ###### FUNZIONE CHE INSERISCE 5 NUMERI NON DOPPIONI
function generaNumeri(max){
    // creo array
    const numeri = []
    // ciclo per creare i numeri
    while (numeri.length < max) {
        // GENERO UN NUMERO CASUALE DA 1 A 100
        let n = numeroRandom (1, 100)
        // 
        if (!numeri.includes(n)) {
            numeri.push(n)
        }
    }
    return numeri
}

// ###### FUNZIONE CHE GENERA NUMERI RANDOM DA MIN A MAX
function numeroRandom (min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

