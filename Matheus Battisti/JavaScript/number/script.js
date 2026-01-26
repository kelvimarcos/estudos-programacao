/* O objeto Number, pai dos números, contém métodos muito úteis para trabalhar com números em JSON

A Maioria dos tipos de dados também tem um objeto pai, como: String, object e Array


 */



//parseFloat 10.0

console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));


//parseInt

console.log(parseInt(10));
console.log(parseInt(16.96));


//toFixed

console.log(23.515151.toFixed(1));


//isNan

console.log(isNaN("teste"));
console.log(isNaN(12));
console.log(isNaN("14");


//max_value e Min_Value

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);