
//metodos e propriedades de arrays


/* 
let videoGames = ['Ps5', 'Switch', 'Xbox', '3DS']


let ultimoItem = videoGames.pop() */; //pega o ultimo item do array
/* 



videoGames.pop() //remove o ultimo item do array
videoGames.push('PC') //adiciona um item no final do array
videoGames.shift() //remove o primeiro item do array
videoGames.unshift('Atari') //adiciona um item no inicio do array
videoGames.splice(2, 1, 'GameCube') //remove ou substitui um item do array (posição, quantidade de itens a remover, item a adicionar) */



/* for (let numero = 0; numero < 50; numero += 5) {
  console.log(numero);}



let i = 0
while (i < 20) {
console.log(i)
 i++
} */


 let videoGames = ['Ps5', 'Switch', 'Xbox', '3DS', 'GameCube', 'Atari']

//for - executa uma instrução até que ela seja falsa
//break - para a execução do loop
//continue - pula a execução do momento atual e continua a partir do próximo

 for (let item = 0; item < videoGames.length; item++) {
   console.log(videoGames[item]);
   if (videoGames[item] === 'Switch') {
     break
   }
 }


//forEach - executa uma função para cada item do array


videoGames.forEach(function(item){
    console.log(item);
})
 



let frutas = ['Banana', 'Pera', 'Uva']

frutas.forEach(function(fruta){
console.log(fruta);
});