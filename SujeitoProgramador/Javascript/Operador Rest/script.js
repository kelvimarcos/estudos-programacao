//Rest operador

/* 
function convidados(...nomes) {
    console.log("Seja bem-vindos todos os convidados");
    console.log(nomes);

}

convidados("Kelvison", "Marcos", "Ângelo"); */


function sorteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log("O número gerado foi: " + numeros[numeroGerado]);
}

sorteador(1, 4, 5, 15, 25, 90, 55, 34);