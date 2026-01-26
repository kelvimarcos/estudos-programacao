

var area = document.getElementById('area')


function entrar(){

    alert("Clicou");
    var nome = prompt("Digite seu nome");

    if(nome === '' || nome === null) { 

        alert("ops algo deu errado")
        area.innerHTML = ("Clique no botão para acessar")}
else {
    area.innerHTML = "Bem-vindo " + nome;


let botaosair = document.createElement("button");
botaosair.innerText = "Sair da conta"
area.appendChild(botaosair;)}
}