//some 500 ap valor do scroll abaixo atribuindo o novo valor a scroll

let scroll = 1000;
scroll += 500;
console.log(scroll);


//atribua true para a variável darCredito, caso o cliente possua carro e casa. e False caso o contrário.


let possuiCarro = true;
let possuiCasa = true;
let darCredito;


darCredito = (possuiCarro && possuiCasa)
darCredito = (possuiCarro && possuiCasa) ? 'dar crédito ao cliente' : 'Não dar crédito ao cliente'
console.log(darCredito)