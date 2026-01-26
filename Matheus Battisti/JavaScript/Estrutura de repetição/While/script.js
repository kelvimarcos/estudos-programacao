/* Estas estruturas servem para repetir n vezes uma operação;
Por exemplo: repetir uma determinada lógica em cada elemento de um array;
As estruturas mais comuns são: While e for;
Obs: Tomar cuidado com o loop infinito. */


/* 
While é a estrutura de repetiçãoo mais simples do JS
A ideia é que se repita algo até atingir tal condição
while -> Enquanto

 */

let x = 0;

while (x < 5) {

    console.log('Testando repetição ' + x);


    x++; //incrementador - Para sair do loop.
}


let arr = ["teste", "testando", 'a', 'b'];
let y = 0;
while (y <= 3) {
    console.log(arr[y]);
    y++
}

let nome = 'Kelvison';
let i = 0;

while (i <= 7) {
    console.log(nome[i]);
    i++;
}