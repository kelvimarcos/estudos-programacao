const animais = document.getElementById('animais');
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridsection[1])

const primeirali = document.querySelector('li')
console.log(primeiraLi);


const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno)


const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('.grid-section');

const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item, index){
    console.log(item)
});

const arrayGrid = array.from(gridSectionHTML);