/* Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor. */



function areaQuadrado(lado) {
  return lado * lado;
}  

console.log(areaQuadrado(4)); // 16


function pi() {
    return 3.14;
}

let valorTotal = 5 * pi(); // 15.7
console.log(valorTotal);




function imc(peso, altura) {
    let imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.8)); // 24.69...


function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    } else if(cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores';
    }
}

corFavorita('azul'); // 'Eu gosto do céu'

