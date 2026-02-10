

/* const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada
 */


const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('animaisdescricao');

h1.innerHTML = '<p>Novo Titulo</p>';

console.log(animaisLista.innerHTML);



//transversing: como navegar pelo DOM, utilizando suas propriedades e métodos.

/* 
const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

 */


const lista = document.querySelector('.animais-lista');

console.log(lista.childreb[lista.children.length]);
