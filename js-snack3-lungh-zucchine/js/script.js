/* Jsnack3 - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine. */


// Creo array con 10 diversi oggetti, differenziati per varietà, peso e lunghezza
var cestoZucchine = [
    { varieta: 'Nera di Milano', peso : 0, lunghezza : 0},
    { varieta: 'Romanesca', peso : 0, lunghezza : 0},
    { varieta: 'Lunga Fiorentina', peso : 0, lunghezza : 0},
    { varieta: 'Ortolana di Faenza', peso : 0, lunghezza : 0},
    { varieta: 'Siciliana', peso : 0, lunghezza : 0},
    { varieta: 'Striata di Napoli', peso : 0, lunghezza : 0},
    { varieta: 'Bianca Triestina', peso : 0, lunghezza : 0},
    { varieta: 'Rigata Pugliese', peso : 0, lunghezza : 0},
    { varieta: 'Tonda di Nizza', peso : 0, lunghezza : 0},
    { varieta: 'Gialla', peso : 0, lunghezza : 0}
];

// Creo due array dove verranno divise le zucchine del cesto generale per lunghezza, e due variabili relative al peso delle zucchine per ognuno dei due cesti 
var cestoZucchinePiccole = [];
var cestoZucchineGrandi = [];
var pesoZucchinePiccole = 0;
var pesoZucchineGrandi = 0;

// Assegno un numero random per ricavare peso e lunghezza di ognuna delle varietà di zucchine presenti nell'array ed in base alla lunghezza di ogi varietà di zucchina pusho il relativo peso all'interno di uno specifico array
for (var i = 0; i < cestoZucchine.length; i++) {

    var peso = generaRandom(50, 900);
    var lunghezza = generaRandom(5, 35);

    cestoZucchine[i].peso = peso;
    cestoZucchine[i].lunghezza = lunghezza;

    if (cestoZucchine[i].lunghezza <= 15) {
        cestoZucchinePiccole.push(cestoZucchine[i]);
        pesoZucchinePiccole += cestoZucchine[i].peso;
    } else {
        cestoZucchineGrandi.push(cestoZucchine[i]);
        pesoZucchineGrandi += cestoZucchine[i].peso;
    }
    
}

console.log(cestoZucchine);
console.log('Cesto Zucchine Piccole', cestoZucchinePiccole);
console.log('Cesto Zucchine Grandi', cestoZucchineGrandi);

console.log(`Il peso delle zucchine Piccole è di: ${pesoZucchinePiccole / 1000} kg`);
console.log(`Il peso delle zucchine Grandi è di: ${pesoZucchineGrandi / 1000} kg`);


// - Funzioni -
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
