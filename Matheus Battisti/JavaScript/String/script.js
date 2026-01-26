/* O objeto String também possui métodos muito úteis;

Que vão nos auxiliar a manusear textos nos nosssos softwares */



//length 

let nome = 'Kelvison';

console.log(nome.length)

let objeto = "Relógio";

console.log(objeto.length)


//indexOf


console.log(nome[2]);

let frase = "O rato roeu a roupa do rei de Roma";

console.log(frase.indexOf("roeu"));

//slice

let roeu = frase.slice(7, 11);

console.log(roeu)


//replace

let novaFrase = frase.replace("roeu", "vida")

console.log(novaFrase)