






const produtos = [
    {
        id: 1,
        nome: "Iphone 11",
        preco: 1100.00,
        temDesconto: true,
        quantidade: 1
    },


    {
        id: 2,
        nome: "Iphone 12",
        preco: 1500.00,
        temDesconto: false,
        quantidade: 1
    },


    {
        id: 3, nome: "Iphone 13",
        preco: 1800.,
        temDesconto: true,
        quantidade: 1
    },


    {
        id: 4,
        nome: "Iphone 17",
        preco: 11000,
        temDesconto: false,
        quantidade: 2,
    },
];



//Adicionar + 10 em cada produto
//Filtrar só os em promoção
//Saber qual é o faturamento se vendermos todos em promoção



const faturamentoTotal = produtos.map(produto => {
    return { ...produto, quantidade: produto.quantidade + 10 }
}).filter(produto => produto.temDesconto).reduce((acumulador, produto) => acumulador + (produto.quantidade * produto.preco), 0)

console.log(faturamentoTotal.toLocaleString('PT-br', {style: 'currency', currency: 'BRL'}))