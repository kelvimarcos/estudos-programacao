//retorne no console todas as imagens do site


const img = document.querySelectorAll('img');
console.log(img);

//retone no console apenas as imagens que começaram apenas com a palavra imagem

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

//selecione os links internos onde oi href começa com #

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

//selecione o primeiro h2 dentro de .animais-descricao

const animais = document.querySelector('.animais-descricao h2');

const h2animais = document.querySelector('h2')

console.log('animais');
console.log('h2animais');

//selecione o ultimo p do site


const paragrafos =  document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
