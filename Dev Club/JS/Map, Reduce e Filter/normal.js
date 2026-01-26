

/* Dominando Arrays no JavaScript


Map(Mapear item por item do array)
-criar um novo array com a mesma quantidade de itens do array original.
-O novo array você pode alterar o que quiser em relação ao array origial.
-Você tem acesso a 3 dados
    -item por item do array
    -Posição do array
    -Array completo 
    
    
Reduce(Reduzir o array a um único valor)
    - Reduz um array inteiro a um único valor
        - você tem acessos a 4 dados: 
            - Acumulador
            - Valor atual
            - Posição atual
            - Array completo
            
            
 Filter(Filtrar o array)
    - cria um novo array filtrando os valores desejados do array original
    - Você tem, acesso a 3 dados
        - item por item do array
        - Posição atual do array
        - Array completo
    
 
 
 */




    const numeros = [1,2,3,4,5]


    /* const dobro = numeros.map(numero => numero * 2) //function
    
    console.log(dobro) */

   /*  const dobro = numeros.map((item, index, Array) => {
        console.log(Array)
    }) */

      /*   const dobro = numeros.map((numero) => {
        return numero * 4
    }) 
 */

    const produtos = [
        {id: 1, nome: "Iphone 11", preco: 1100.00, temDesconto: true, quantidade: 1},
        {id: 2, nome: "Iphone 12", preco: 1500.00, temDesconto: false, quantidade: 1},
        {id: 3, nome: "Iphone 13", preco: 1800., temDesconto: true, quantidade: 1 },
        {id: 4, nome: "Iphone 17", preco: 11000, temDesconto: false, quantidade: 2, },
    ];

    
    const novosProdutos = produtos.map(produto => {
       
        const novoPreco = produto.temDesconto ? produto.preco * 0.5 : produto.preco //ternário = IF / else ? = if / : else
       
        return {
            id: produto.id,
            nome: produto.nome,

            preco: novoPreco.toLocaleString('Pt-br',{ style: 'currency', currency: 'BRL'}),

            quantidade: produto.quantidade,
        }
    })

    // console.log(novosProdutos)


    //Qual será o faturamento, se vendermos todo o estoque

    
    const totalVendas = produtos.reduce((acumulador, produto) => {
        return acumulador + ( produto.preco * produto.quantidade) 
    }, 0)

    console.log(
        totalVendas.toLocaleString('Pt-br', {
            style: 'currency',
            currency: 'BRL',
        }),
    )


//Filtrar somente os produtos em promoção


const promocao = produtos.filter( produto => produto.temDesconto)
console.log(promocao)