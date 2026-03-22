

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function adicionarTarefas(){
    if(inputelement.value === ''){
        alert("Digite alguma tarefa");
        return false;
    }else{
        console.log(inputElement.value);
    }
}
buttonElement.onclick = adicionarTarefas;