







const users = [
    {name: 'Kelvison', age: 28, contato: '8299999999'},
    {name: 'Marcos', age: 26, contato: '827777777777'},
    {name: 'Angelo', age: 12, contato: '828888888888'},
   
]

/* item - Dados/informações contidos na posição atual
index - Número da posição. sempre começando em 0
array - Retorna o Array completo */

users.forEach(function(item, index, array){
    if(item.age < 18){
        console.log(`O cliente ${item.name}, na posição ${index} é menor de idade.`)
    }

})