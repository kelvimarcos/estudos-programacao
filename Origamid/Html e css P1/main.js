/* const img = document.querySelectorAll('img');

let i = 0
img.forEach((item, index, array) => console.log(i++);)
 */


//mostre no console cada parágrafo do site
/* 
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
    console.log(item.innerText);
}) */



    const menu = document.querySelector('.menu');

    menu.classList.add('ativo');
    menu.classList.remove('azul');
    menu.classList.toggle('azul')

    if (menu.classList.contains('azul')){
        menu.classList.add('possui-azul');

    } else {
        menu.classList.add('Não-possui-azul');
    }
    
    menu.className = 'ativo teste azul'
    console.log(className)

// console.log(menu.classList);


//atributos retorna uma array com atributos do elemento

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);


const img = document.querySelector('src');




