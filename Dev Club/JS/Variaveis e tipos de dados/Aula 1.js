

/* Tipos de dados

String -> textos 
 */

const numero = 39;

const texto = `O número é ${numero}`;
console.log(texto);

/* 
numbers -> Números */

const soma = 200 / 5 - 2 + 1

console.log(soma);


/* Bolean -> Booleano */


/* Object -> Objetos */

const nome = "Kelvison"
const idade = 28
const casado = true

const usuario = { 
    nome: "Marcos",
    idade: 28,
    casado: true,
}

console.log(usuario)



/* null -> undefined */



const cliente = {
    nome: "Pedro",
    casado: true,
    conjuge: null
 }


 /* Array -> Matriz */

 const dados = [
    {nome: "Kelvison",
    idade: 28,
    endereco: "Rua dos bobos",
    }, 
    {nome: "Marcos",
    idade: 28,
    endereco: "Rua dos bobos",
    }, 
  ]

console.log(dados)


//if Else


const notadoaluno = 2


if(notadoaluno >= 4) { 
    console.log("Aluno aprovado!")

}   else { 
    console.log("Aluno reprovado!")
}
