/* //FIND


let listagem = [5, 3, "Kelvison", 2, "Marcos"]

let busca = listagem.find((item) => {
    if (item === "Kelvison") {
        return console.log("Item encontrado com sucesso");
    }

});

console.log(busca); */


//Filter

let palavras = ["Matheus", "Ana", "José", "Ricardo", "Kelvison"];

let resultado = palavras.filter((item) => {
    return item.length >= 5;
})

console.log(resultado)