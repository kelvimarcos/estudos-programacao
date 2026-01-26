/* Temos algumas maneiras de atribuir um valor a uma variável;
As mais utilizadas são: +=, -=, *=, /=;
Basicamente é uma forma resumida da operação: X = X + y;
Em loops também é comun utilizar os operadores++ ou--; */

let x = 1;
let y = 2;

//soma
console.log(x = x + y);
console.log(x += y);

//Subtração
console.log(x -= y);

//multiplicação
console.log(x *= y)

//divisão 
console.log(x /= y);

//Loop
console.log(x++);
console.log(x--);

while (x <= 100) {
    console.log(x);

    x *= 2;
}

console.log(x);

let j = 5;

while (x > 0) {
    console.log(x);
    x -= j;
}