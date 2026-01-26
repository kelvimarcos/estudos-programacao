

// Exercício 1


// Compare a sua idade com a do seu primo.
// Dependendo do resultado coloque no console 'Minha idade é maior que a do meu primo.', 'Minha idade é igual a do meu primo.' ou 'Minha idade é menor que a do meu primo.'.


let minhaIdade = 28;
let idadePrimo = 30;


if (minhaIdade > idadePrimo) {
    console.log('Minha idade é maior que a do meu primo.');
} else if (minhaIdade === idadePrimo) {
    console.log('Minha idade é igual a do meu primo.');
} else {
    console.log('Minha idade é menor que a do meu primo.');
};


//qual o valor retornado na seguinte expressão?
const expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);


//verifique se as seguintes variáveis são Truthy ou Falsy
const nome = 'Andre';
const idade = 28;
const possuiDoutorado = false;
const empregoFuturo = null;
const dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta); // Truthy

//compare o total de habitantes do Brasil com China (use os dados reais da população)

const brasil = 207;
const china = 1340;
if (brasil > china) {
    console.log('Brasil tem mais habitantes que a China');
} else {
    console.log('Brasil tem menos habitantes que a China');
}


//O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}  
//Falso

//O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');} else {
    console.log('Falso');
}