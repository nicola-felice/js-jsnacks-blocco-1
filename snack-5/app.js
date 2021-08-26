
// Crea un array vuoto. 
const numeriDispari = [];

//Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt('iniserisci un numero'));

    //se è dispari inseriscilo nell’array
    if (num % 2 == 1) {
        numeriDispari.push(num);
    }
}

console.log(numeriDispari);