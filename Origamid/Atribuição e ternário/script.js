
// Atribuição e ternário


let numero = 20
let numero2 = 40

numero += numero2; // numero = numero + 10
console.log(numero);

numero -= numero2; // numero = numero - 10
console.log(numero);

numero *= numero2; // numero = numero * 10
console.log(numero);      

numero /= numero2; // numero = numero / 10
console.log(numero);



// Operador ternário

let idade = 21;
let naoPossuiDiabetes = true;
let podeBeber = idade >= 18 && naoPossuiDiabetes ? 'pode beber' : 'Não pode beber';

console.log(podeBeber);

//abreviação do if else

let possuiFaculdade = true;

if(possuiFaculdade)
    console.log('possui faculdade');

else
    console.log('não possui faculdade');


