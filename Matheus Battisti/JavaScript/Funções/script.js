/* Funções de blocos de códigos reutilizáveis;
ou seja, evitamos a repetição da lógica de um programa em diversas partes do código;
A função precisa ser invcada para ser executada; */

function primeiroFuncao() {
    console.log("Olá, mundo!");
}


primeiroFuncao();


function dizerNome(nome) {
    console.log("Meu nome é: " + nome);

}

dizerNome("Kelvison");



let nomeDoBancoDeDados = "Marcos"
dizerNome(nomeDoBancoDeDados);




Function soma(a, b){
    let soma = a + b;
    return soma;

}


let somaUm = soma(1, 3);
console.log(somaUm);