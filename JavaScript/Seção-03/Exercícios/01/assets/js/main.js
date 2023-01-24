function myCode() {
  const formulario = document.querySelector(".form");

  // CAPTURANDO O EVENTO DE SUBMIT E PREVININDO-O
  function preventSubmit(event) {
    event.preventDefault();

    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
      setResultado("Peso inválido", false);
      return;
    } else if (!altura) {
      setResultado("Altura inválida", false);
      return;
    }

    const imc = getImc(peso, altura);
    const indiceImc = getIndiceImc (imc);

    const messenger = `Seu IMC é ${imc} (${indiceImc}).`;
    setResultado (messenger, true);
  }
  formulario.addEventListener("submit", preventSubmit);

  // CRIANDO OS PARÁGRAFOS NO HTML PARA ABRIGAR OS RESULTADOS
  function criaParagrafo() {
    const p = document.createElement("p");
    return p;
  }

  // MENSAGEM COM O RESULTADO
  function setResultado(messenger, isValid) {
    const resultado = document.querySelector("#result");
    resultado.innerHTML = '';

    const p = criaParagrafo();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = messenger;
    resultado.appendChild(p);
  }

  // CRIANDO A FUNÇÃO PARA CALCULAR O RESULTADO
  function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }

  // LÓGICA PARA O CÁLCULO DO IMC - CHECANDO INVERTIDO
  function getIndiceImc(imc) {
    const indice = [
      "Abaixo do peso",
      "Peso normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3"
    ];

    if (imc >= 39.9) {
      return indice[5];
    } else if (imc >= 34.9) {
      return indice[4];
    } else if (imc >= 29.9) {
      return indice[3];
    } else if (imc >= 24.9) {
      return indice[2];
    } else if (imc >= 18.5) {
      return indice[1];
    } else if (imc < 18.5) {
      return indice[0];
    }
  }
}

myCode();
