










var pessoa = {
    nome: "kelvison",
    idade: 25,
    endereco: 'Rua dos bodos',
    profissao: 'Desenvolvedor',
}
console.log(pessoa);



let quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
}, 

parametro: function (lado) {
    return lado * this.lados;
}
};

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.parametro(5));


// Crie um objeto com os seus dados pessoais
let menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

// Modifique a largura do menu
menu.backgroundColor = '#000';
let bg = menu.backgroundColor;
console.log(bg);






