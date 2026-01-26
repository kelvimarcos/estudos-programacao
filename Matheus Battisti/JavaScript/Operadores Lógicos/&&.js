/* O operador && é conhecido como AND */




let idade = 16;
let nome = "Kelvison";

if(nome == "Kelvison" && idade == 16){ 
console.log("O Kelvison pode entrar na aula de programação")
} else {
    console.log("Ele não é o Kelvison")
}


if(1 == 1 && 3 > 2 && true){
    console.log('Passou')
}

if(1 == 1 && 3 > 3 && true) { 
    console.log('Passou')
} else if(nome === 'Kelvison' && idade >= 14) {
    console.log("Aqui passa!")
}