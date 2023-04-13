// AULA 86 - REDUCE ( PODE REALIZAR AS MESMAS FUNÇÕES DO MAP E FILTER, PORÉM NÃO É O IDEAL, UTILIZAR O REDUCE APENAS PARA REDUZIR O TAMANHO DO ARRAY)

// SOME TODOS OS NUMEROS
// RETORNE UM ARRAY COM OS PARES (filter)
const numeros = [5, 50, 10, 15, 7, 8, 1, 0, 18, 22, 27, 25];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
acumulador += valor;
return acumulador;
}, 0); // <- 0 É O VALOR INICIAL PARA O ACUMULADOR
console.log(total);

const pares = numeros.filter((valor) => valor % 2 === 0);
console.log(pares);

// RETORNANDO A MAIS VELHA

const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 70 },
    { nome: "Walla", idade: 47 },
  ];

  const maisVelha = pessoas.reduce(function(acumulador,valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
  }); // > NÃO VAMOS STARTAR NO 0 POIS SEM ELE O ACUMULADOR ASSUME O PRIMEIRO VALOR, LOGO O PRIMEIRO OBJ E ASSIM USAREMOS PARA COMPARAR O PRIMEIRO COM OS DEMAIS
console.log(maisVelha);