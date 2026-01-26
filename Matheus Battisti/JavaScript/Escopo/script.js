/* - No JavaScript podemos ter vários escopos;
- O global, que é iniciado em toda a aplicação;
- E os locais, que podem existir em várias instruções como as funções;
 */



let x = 1;

let y = 3;

console.log(x, y);

function teste() {

    let z = 0;

    console.log(z);
    console.log(x);

}

teste();


function testando() {
    let z = 5;
    console.log(z);
}

testando();


if (true) {
    let p = 1;
}

console.log(p);