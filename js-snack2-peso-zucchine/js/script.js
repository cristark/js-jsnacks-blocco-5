/* Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. */

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

for (var i = 0; i < cestoZucchine.length; i++) {
    var peso = generaRandom(50, 900);
    var lunghezza = generaRandom(10, 60);

    cestoZucchine[i].peso = peso;
    cestoZucchine[i].lunghezza = lunghezza;
}

console.log(cestoZucchine);

// - Funzioni -
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}