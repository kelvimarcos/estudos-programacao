//crie um objeto com seus dados pessoais deve possuir pelo menos duas propriedades nome e idade

let dadosPessoais = {
  nome: "Kelvison",
  sobrenome: "Marcos",
  idade: 25,
  profissao: "Desenvolvedor",
  cidade: "Alagoas"
};

console.log(dadosPessoais);


//crie um método que mostre o seu nome completo

dadosPessoais.nomeCompleto = function() {
  return this.nome + " " + this.sobrenome;
}

console.log(dadosPessoais.nomeCompleto());




//modifique o valor da propriedade idade
let carro = {
    preco: 50000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 10000;

console.log(carro);


//crie um objeto de um cachorro que contenha nome, raca, cor, idade e um método latir que retorne auauauau

let cachorro = {
    nome: 'Rex',
    raca: 'Labrador',
    cor: 'Amarelo',
    idade: 3,
    latir(pessoa) {

        if(pessoa === 'homem') {
            return 'Auauauauauau';
        } else {
            return 'Nada';
        }}
}


console.log(cachorro);

console.log(cachorro.latir('homem'));

