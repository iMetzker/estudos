// AULA 69 PARÂMETROS DA FUNÇÃO COM A SÍNTESE FUNCTION

// DADO UMA FUNÇÃO MESMO SEM PARÂMETRO ELA AINDA POSSUI UMA VARIÁVEL QUE SE CHAMA ARGUMENTS, ESTES SÃO OS QUE CHAMAMOS AO INVOCAR A FUNÇÃO. PODENDO SER USADOS.

function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);

// OUTRA FORMA É COLOCANDO UM VALOR PADRÃO NO MEU PARÂMETROS, CASO NÃO SE ASSUMA NENHUM VALOR AO CHAMAR COMO ARGUMENTO

function soma(a, b = 2, c = 4) {
  console.log(a + b + c);
}
// SUPONDO QUE QUEREMOS PULAR O VALOR DE B E DEIXAR COMO O PADRÃO JÁ DEFINIDO, A UNICA MANEIRA É DECLARANDO COMO UNDEFINED (NÃO É RECOMENDADO, MELHOR MUDAR A LÓGICA)
soma(2, undefined, 20);

// UTILIZANDO O OPERADOR DE RESTO, PARA TODOS OS ARGUMENTOS QUE SERÃO INSERIDOS

function conta (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);