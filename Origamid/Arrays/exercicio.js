// Adicione a Copa de 2006 ao array brasilCampeao utilizando o método adequado.

let brasilCampeao = ["2002", "1994", "1970", "1962", "1958"];

//interação com o array utilizando um loop para mostrar no console cada ano em que o Brasil foi campeão


for (let i = 0; i < brasilCampeao.length; i++) {
  console.log(`O Brasil foi campeão em: ${brasilCampeao[i]}`);
}

//interaja com um loop nas frutas abaixo e pare ao chegar em Pera
const frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if (frutas[fruta] === "Pera") {
        break;
    }
}


//coloque a ultima fruta do array acima em uma variável sem remover a mesma do array.

let ultimaFruta = frutas[frutas.length - 1]; // Acessa o último elemento do array

console.log(ultimaFruta); // Exibe "Melância"