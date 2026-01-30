










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
    height: 200,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}

// Modifique a largura do menu
menu.backgroundColor = '#000';
let bg = menu.backgroundColor;
console.log(bg);

console.log(menu.metadeHeight());






//metodos de propriedade de string

let nome = 'Kelvison';
nome.length; // 8
nome.charAt(0);
nome.replace('K', 'C');
nome; // 'Kelvison'

console.log(nome.length);
console.log(nome.charAt(0));
console.log(nome.replace('C', 'K'));
console.log(nome);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.indexOf('i'));
console.log(nome.split('C'));
console.log(nome.slice(0, 3));
console.log(nome.slice(3, 7)); 
console.log(nome.slice(3));
console.log(nome.repeat(3));
console.log(nome.trim());
console.log(nome.concat(' Marcos'));
console.log(nome.startsWith('K'));
console.log(nome.endsWith('n'));
console.log(nome.includes('lvi'));


//metodos de propriedade number

let numero = 2026123;


console.log(numero.toFixed(2));
console.log(numero.toString().length);
console.log(numero.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
console.log(Math.round(numero));
console.log(Math.floor(numero));
console.log(Math.ceil(numero));
console.log(Math.random());
console.log(Math.max(10, 5, 20, 30, 50, 3));
console.log(Math.min(10, 5, 20, 30, 50, 3));

 
//funcoes também possuem propriedades e metodos

function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar.length);
console.log(somar.name);
console.log(somar(5, 10));
console.log(somar.call(null, 5, 10));
console.log(somar.apply(null, [5, 10]));
