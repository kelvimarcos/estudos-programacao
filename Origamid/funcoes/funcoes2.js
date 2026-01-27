function imc2(peso, altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(20, 1.8); // 24.69


function terceiraIdade(idade){
    if(idade >= 60){
        console.log('Terceira idade');
    } else {
        console.log('Não é terceira idade');
    }}
terceiraIdade(20); // Terceira idade


function dados() {
    let nome = `André`;
    let idade = 28;
    return `${nome}, ${idade} anos`;
}

console.log(dados()); // André, 28 anos