/* O for tem umma sintaxe mais complexa, mas é optado pela maioria dos programadores;
apesar de parecer mais dificil, como a instrução fica toda em uma linha, proporciona maior controle */


for (let i = 0; i <= 10; i++) {

    console.log("Repetindo for: " + i);

}


let numeros = [1, 2, 3, 4];

for (let j = 0; j < numeros.length; j++) {

    console.log(numeros[j]);

}

console.log(numeros.length);


for (let x = 5; x < 100; x *= 3) {
    console.log(x);
}