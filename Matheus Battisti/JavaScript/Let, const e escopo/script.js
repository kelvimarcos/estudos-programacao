/* Utilizando let e const podemos criar escopo até em instruções como if.

Deixando o código mais confiável;

Separando cada bloco em um escopo

 */


let x = 5; //var x = 5;

const y = 10; //Possui um valor constante

x = 12;

console.log(x);


if (true) {
    let x = 20
    console.log(x)
}

console.log(x);

console.log(y);
