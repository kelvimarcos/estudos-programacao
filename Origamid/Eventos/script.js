/*Event 

o primeiro parâmetro do Callback é referente ao que ocorreu 

*/

/* 

const img = document.querySelector('img');

function callback(event){ 
    console.log(event);
}

img.addEventListener('click', callback);



const animalLista = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.Target);
}


animalLista.addEventListener('click', callbackLista);

//exitem vários outros eventos como: 'click', 'mouseenter', 'scroll' 'recize';
 */



const linksInternos = document.querySelectorAll('a[href^=0]');

function handleLink(event){
event.preventDefault();
linksInternos.forEach((link) => {
    link.classList.remove('ativo');
})
event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})







const todosElementos = document.querySelectorAll('body *');



function handleLElemento(event){
    console.log(event.currentTarget);
}


todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleLElemento)

})
