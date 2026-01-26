
/* 
Functions / funções

- Trecho de código que é executado somente quando solicitado (parente gente boa)
- Trecho do código que pode ser reutilizado várias vezes


[] O que é uma função e como Usar 
[] Função VOID (vazia)
[] Função com parâmetros
[] Função return
[] Arrow Fuction */



// void

function digaMeuNome() {
    const name = 'Kelvison'
    console.log(name)
}

digaMeuNome()
digaMeuNome()
digaMeuNome()
digaMeuNome()

// Parâmetros

function digaQualquerNome(nome) {
    
    console.log(nome)
}

digaQualquerNome("Marcos")
digaQualquerNome("Angelo")



// return

function estaEndividado(receita, gastos) {
    if (receita > gastos) { 
        return 'Está no azul'
    } else { return 'Está no vermelho'}
    
}

const maria = estaEndividado(5000,7000)
const João = estaEndividado(10000,2000)

console.log(maria)
console.log(João)


// Arrow Function

function abacate() {} //forma clássica


const digaMeuNome2 = (nome) => {
    console.log('Kelvison')
 }

 digaMeuNome2()