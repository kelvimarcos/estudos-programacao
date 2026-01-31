


/* window.alert('Olá, mundo!')
const h1Selecionado = document.querySelector('titulo') */

/* Node  
Toda tag HTML é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node. */

let titulo = document.querySelector('.titulo');
let paragrafo = document.querySelector('.paragrafo');


titulo.addEventListener('click', function() {
  titulo.style.background = 'black';
  titulo.style.color = 'white';
  titulo.style.padding = '30px'
});

paragrafo.addEventListener('click', function() {
    paragrafo.style.background = 'gray';
    paragrafo.style.color = 'white';
    paragrafo.style.fontWeight = 'bolder';
    paragrafo.style.fontSize = '19px';
    paragrafo.style.fontFamily = 'Arial'
    paragrafo.style.padding = '20px'
    

});






