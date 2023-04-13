// AULA 87 - FILTER + MAP + REDUCE 

// A SOMA DO DOBRO DE TODOS OS PARES

const numeros = [5, 50, 10, 15, 7, 8, 1, 0, 18, 22, 27, 25];

const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);
