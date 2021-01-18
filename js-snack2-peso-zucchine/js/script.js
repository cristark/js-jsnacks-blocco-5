/* Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. */

// Creo variabile che opsiterà il peso delle zucchine
var pesoZucchine = 0;

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

// Assegno un numero random per ricavare peso e lunghezza di ognuna delle varietà di zucchine presenti nell'array e per ogni ciclo sommo i pesi delle zucchine
for (var i = 0; i < cestoZucchine.length; i++) {

    var peso = generaRandom(50, 900);
    var lunghezza = generaRandom(10, 60);

    cestoZucchine[i].peso = peso;

    pesoZucchine += cestoZucchine[i].peso;

    cestoZucchine[i].lunghezza = lunghezza;

}

console.log(cestoZucchine);
console.log(`Il peso delle zucchine nel cesto è di: ${pesoZucchine / 1000} kg`);


// - Funzioni -
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}