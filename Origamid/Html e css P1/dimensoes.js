/* Height e Width
Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
 */

/* const listaAnimais = document.querySelector('.animais-lista'); */



/* const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop
console.log(animaisTop);
 */

//offsetTop e OffsetLeft


//distancia entre o topo do elemento e o topo da página

//const section.offsetTop;

//distancia entre o canto esquerdo do elemento e o canto esquerdo da página.


//section.offsetLeft;



/* metodo retorna um objeto com valores de width, height, distancias do elemento e mais.

getBoundingClientRect() 

O método getBoundingClientRect() é uma função do DOM em JavaScript que retorna um objeto com informações sobre o tamanho e a posição de um elemento relativa à janela de visualização (viewport).




const primeiroh2 = document.querySelector('h2');

const h2left = primeiroh2.offsetLeft

const rect = primeiroh2.getBoundingClientRect();

console.log(rect.left);*/



/* window.innerWidth; //widht da janela
window.outerWidth //soma dev tools também
window.innerHeight; //height da janela
window.outerHeight //soma a barra de endereço


window.pageYOffset //distancia total do scroll horizontal
window.pageXOffset //distancia total do scroll vertical

if(window.innerHeight < 600){
    console.log('tela menor que 600px');
} else { 
    console.log('Tela maior que 600px')
}

 */


//utilize um media-querie coomo no css para verificar a largura do browser

matchMedia()

const small = window.matchMedia('(max-width:600px)');

if(small.matches){
    console.log('Tela menor que 600px');
} else {
    console.log('Tela maior que 600px')
}