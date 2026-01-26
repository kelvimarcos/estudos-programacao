//toLowerCase e toUpperCase


let frase = "Esta é a frase que vamos manipular";

let fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLocaleLowerCase());



//trim


let nome = "         Kelvison       ";

let nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);


//split

console.log(frase.split(" "));

let tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

//lastIndexOf

let fraseDois = "Eu quero a última palavra teste";


console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste"));
