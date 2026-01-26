let pessoa = {
    Nome: "Kelvison",
    Sobrenome: "Marcos",
    Idade: 28,
    Empresa: "KTECH",
    Cargo: "FullStack"
};


/* console.log(pessoa.Nome);
console.log(pessoa.Cargo);
 */

/*
const { Nome: nomePessoa, Cargo, Idade, Empresa, } = pessoa;

console.log(nomePessoa);
console.log(Cargo) */



//Desconstruir um Array


let nomes = ["Kelvison", "Marcos", "Ângelo", "Henrique"]

/* let { 0: kelvison, 1: Marcos } = nomes
console.log(nomes[1])
console.log(nomes[0])
 */

let [primeiro, segundo, terceiro] = nomes;

console.log(primeiro)
console.log(segundo)
console.log(terceiro)