//Funções anônimas



/* 
() => {}

1 - Os parênteses, que é por onde a função recebe os argumentos(Assim como na função tradicional);
2 - Seta => Responsavel pelo nome arrow;
3 - Chaves - Bloco de código que representa o corpo da função.
*/


function somar(a, b) {
    let total = a + b;

    return console.log(total);
}

somar(10, 20);


let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;

    console.log(total);
}

subtrair(50, 25);


let numeros = [1, 2, 3, 5, 10];

numeros.map((item) => {
    console.log(item);
})