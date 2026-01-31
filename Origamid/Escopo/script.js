



//variaveis criadas em function não pode ser acessadas fora das mesmas

//Escopo evita conflitos de nomes




/* Variável Global (Erro)  


Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro.
 */

//escopo de função
function mostrarCarro() {
    let carro = 'Ferrari'
    console.log(carro);
}

mostrarCarro(); //fusca no console


//escopo de bloco

if(true) {
    let mes = 'dezembro';
    console.log(mes);
}