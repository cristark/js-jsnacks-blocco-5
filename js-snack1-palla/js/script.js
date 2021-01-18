/* Jsnack1 - Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla. */

// Creo oggetto palla
var palla = {
    nome : 'palla',
    peso : 10
};

// Stampo a schermo caratteristiche oggetto palla
for (var k in palla) {

    console.log(`${k}: ${palla[k]}`);

}

// Permetto all'utente di cambiare il peso della palla
palla.peso = parseInt(prompt('Modifica il peso della palla'));
alert(`La palla adesso pesa ${palla.peso}`);

// Stampo a schermo le nuove caratteristiche della palla
for (var k in palla) {

    console.log(`${k}: ${palla[k]}`);

}