

/*
Abaixo de 17 muito abaixo do peso
entre 17 e 18,49 abaixo do peso
entre 18,5 e 24,99 peso normal
entre 25 e 29,99 acima do peso */


//peso / (altura * altura);

    // Seleciona o formulário e registra o listener
    document.getElementById('formIMC').addEventListener('submit', calcular);

    function calcular(event) {
      event.preventDefault();          // evita recarregar a página
      
      // Pega os valores NUMÉRICOS
      const peso   = parseFloat(document.getElementById('peso').value);
      const altura = parseFloat(document.getElementById('altura').value);
      
      if (!peso || !altura) return;    // garante que existam valores válidos
      
      const imc = peso / (altura * altura);
      const resultadoEl = document.getElementById('resultado');

      if (imc < 17) {
        resultadoEl.innerHTML =
          `<br>Seu IMC é ${imc.toFixed(2)}<br><strong>Cuidado:</strong> você está muito abaixo do peso!`;
      } else {
        resultadoEl.innerHTML =
          `<br>Seu IMC é ${imc.toFixed(2)}<br>Situação dentro dos limites dessa condição.`;
      }
    }
 