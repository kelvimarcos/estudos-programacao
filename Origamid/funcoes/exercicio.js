
//crie uma função que verifique se um dado é truthy ou falsy

function isTruthy(dado){
    return !!dado;
}

console.log(isTruthy(0)); // false



//crie uma função que retorne o perímetro de um quadrado, lembrando: perímetro é a soma dos quatro lados do quadrado


function perimetroQuadrado (lado) {
    return lado * 4;
}

console.log(perimetroQuadrado(4));


function nomeCompleto (nome, sobrenome){
    return `${nome} ${sobrenome}`;

}

console.log(nomeCompleto('Kelvison', 'Marcos'));



//crie uma função que verifique se um número é par

function isPar(numero){
    let modulo = numero % 2;
    if(modulo === 0){
        return true;
    } else {
        return false;
    }
}


console.log(isPar(3)); // true


//crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function tipoDado(dado){
    return typeof dado;
}

console.log(tipoDado(10)); // number


//crie uma função que retorne o nome do país onde você nasceu


function paisNascimento(){
    return 'Brasil';
}


console.log(paisNascimento()); // Brasil



//quando o evento 'scroll' acontecer, exiba no console a mensagem 'Você está fazendo scroll na página'

addEventListener('scroll', function(){
    console.log('Você está fazendo scroll na página');})