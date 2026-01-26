/* Estrutura de repetição - LOOP


-For 
    1[ Inicialização] criar uma variável e colocar um valor inicial para ela

    2 [Condição] Enquanto for true, o laço continuará iterando. Ele irá verificar amtes de cada interação.Condição

    3 [Expressão final] O que irá ocorrer a cada vez que o nosso laço der uma volta.



    for ([Inicialização]; [Condição]; Expressão final) { 
        Seu código aqui
    } */


    
        const users = ['Maria', 'Aline', 'João']

        for(let i = 0; i < users.length; i++) {
                console.log(users[i])

        }