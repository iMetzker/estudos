// AULA 70 - RETORNO DA FUNÇÃO

// CONSOLE.LOG - EXIBE NA TELA, NÃO RETORNA NADA, PORÉM PODE-SE TER UMA FUNÇÃO QUE MESMO NÃO RETORNANDO NADA, EXECUTA ALGO; RETURN RETORNA UM VALOR E TERMINA A FUNÇÃO

function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a + b);
}
soma2(5, 2);

// A CONSTANTE fala SE TORNA UMA FUNÇÃO POIS A FUNÇÃO falaFrase RETORNA UMA OUTRA FUNCTION, E QUANDO CHAMAMOS A FUNÇÃO O ARGUMENTO UTILIZADO DENTRO DELA É DIRETAMENTE A FUNÇÃO QUE ESTÁ SENDO RETORNADA. NESTE MOMENTO A CONSTANTE FALA ASSUME O VALOR DA FUNCTION FALARESTO.

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const fala = falaFrase ('Olá');
const resto = fala('mundo!');
console.log(resto);