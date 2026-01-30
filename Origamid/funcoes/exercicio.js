
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