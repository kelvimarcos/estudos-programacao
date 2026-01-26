/* let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10];

console.log(numeros); */

/* 
let pessoa = {
    nome: "Kelvison",
    idade: 30,
    cargo: "DEV",
}


let novaPessoa = {
    ...pessoa,
    status: "Ativo",
    cidade: "Campo Alegre",
    telefona: 99999999,
}

console.log(novaPessoa); */


function novoUsuario(info) {
    let dados = {
        ...info,
        status: "Ativo",
        Inicio: "20/03/2025",
        codigo: 5555
    };
    console.log(dados);
}

novoUsuario({ nome: "Kelvison", sobrenome: "Marcos", cargo: "Dev" });