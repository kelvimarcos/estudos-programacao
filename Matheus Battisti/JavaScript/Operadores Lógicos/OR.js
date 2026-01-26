/* O operador lógico || é conhecido como OR

Ele retorna true caso uma das operações retorne verdadeiro

o OR retorna false apenas se as duas expressões são falsas; */


let idade = 16;

let nome = "Kelvison"


if (nome == "Kelvison" || idade >= 16) {
    console.log("Pode entrar na aula de JavaScript")
} else {
    console.log("Não pode entrar")
}


if ((nome == "Marcos" && (30 > 20) || 10 == 10)) {
    console.log("Testando")
}