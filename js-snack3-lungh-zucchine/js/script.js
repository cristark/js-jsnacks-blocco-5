/* Jsnack3 - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine. */


// Creo array con 10 diversi oggetti, differenziati per varietà, peso e lunghezza
var cestoZucchine = [
    { varietà : 'Nera di Milano', peso : 0, lunghezza : 0},
    { varietà : 'Romanesca', peso : 0, lunghezza : 0},
    { varietà : 'Lunga Fiorentina', peso : 0, lunghezza : 0},
    { varietà : 'Ortolana di Faenza', peso : 0, lunghezza : 0},
    { varietà : 'Siciliana', peso : 0, lunghezza : 0},
    { varietà : 'Striata di Napoli', peso : 0, lunghezza : 0},
    { varietà : 'Bianca Triestina', peso : 0, lunghezza : 0},
    { varietà : 'Rigata Pugliese', peso : 0, lunghezza : 0},
    { varietà : 'Tonda di Nizza', peso : 0, lunghezza : 0},
    { varietà : 'Gialla', peso : 0, lunghezza : 0},
];

// Creo due array dove verranno divise le zucchine del cesto generale per lunghezza, e due variabili relative al peso delle zucchine per ognuno dei due cesti 
var cestoZucchinePiccole = [];
var cestoZucchineGrandi = [];
var pesoZucchinePiccole = 0;
var pesoZucchineGrandi = 0;

// Assegno un numero random per ricavare peso e lunghezza di ognuna delle varietà di zucchine presenti nell'array e per ogni ciclo sommo i pesi delle zucchine
for (var i = 0; i < cestoZucchine.length; i++) {

    var peso = generaRandom(50, 900);
    var lunghezza = generaRandom(5, 35);

    cestoZucchine[i].peso = peso;
    
    cestoZucchine[i].lunghezza = lunghezza;
    
    if (cestoZucchine[i].lunghezza <= 15) {
        cestoZucchinePiccole.push(cestoZucchine[i]);
    } else {
        cestoZucchineGrandi.push(cestoZucchine[i]);
    }
    
}

console.log(cestoZucchine);
console.log(`Cesto Zucchine piccole: ${cestoZucchinePiccole}`);
console.log(`Cesto Zucchine Grandi: ${cestoZucchineGrandi}`);

/* console.log(`Il peso delle zucchine Piccole è di: ${pesoZucchinePiccole} gr`);
console.log(`Il peso delle zucchine Grandi è di: ${pesoZucchinePiccole} gr`); */


// - Funzioni -
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/* function sommaPesi(arr1) {

    var sum = 0;
    for (var i = 0; i < arr1.length; i++) {
        sum += parseInt(i);
    }

    return sum;
} */