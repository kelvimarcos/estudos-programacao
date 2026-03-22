

//algoritmo do nosso sistema
// lógica de programação
// estrutura de dados
// algoritmos de ordenação


/* 
[] saber quem é o botão
[] criar um evento de clique para o botão
[] saber quem é o textarea
[] pegar o valor do textarea
[] enviar para IA
[] Pegar a resposta da Ia e colocar na tela */


//descobrir o botão
let botao = document.querySelector(".botao-gerar");
let chat = "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";
let endereco = "https://api.groq.com/openai/v1/chat/completions"

//criar um evento de clique para o botão
async function gerarCodigo() {

    let textoUsuario = document.querySelector(".caixa-texto").value;
    let blocoCodigo = document.querySelector(".bloco-codigo");
    let resultadoCodigo = document.querySelector(".resultado-codigo");

    let resposta = await fetch(endereco, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },

        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{
                role: "system",
                content: "Você é um gerador de código html e css. Responda somente com o código puro"
            },
            {
                role: "user",
                content: textoUsuario
            }
            ]

        })


    })

    let dados = await resposta.json();
    let resultado = dados.choices[0].message.content;
    resultado = resultado.replace(/```html/g, "").replace(/```/g, "").trim();

    blocoCodigo.textContent = resultado;
    resultadoCodigo.srcdoc = resultado;

}

//adicionar o evento de clique ao botão

botao.addEventListener("click", gerarCodigo);