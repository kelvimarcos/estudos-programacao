/* //MAP = percorrer todo um array

let lista = ["kelvison", "marcos", "Angelo"];

lista.map((item, index) => {
    console.log(`passando: ${item} - está na posição ${index}`);
});*/



//Reduce = O reduce busca reduzir um array

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - Total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - Indice atual`);
    console.log(`${original} - Array original`);

    return acumulador += numero;
});

console.log("Total do reduce: " + total);