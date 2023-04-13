// AULA 85 - MAP - FUNCIONA COMO UM FILTER, PORÉM ALTERA OS VALORES DO ARRAY, RETORNANDO UM ARRAY DO MESMO TAMANHO QUE O ORINAL, PORÉM COM VALORES ALTERADOS.

const numeros = [5, 50, 10, 15, 7, 8, 1, 0, 18, 22, 27, 25];

const numerosEmDobro = numeros.map(function(valor, indice, array) {
    return valor * 2;
});

console.log(numerosEmDobro);

// RETORNAR APENAS UM ARRAY COM OS NOMES
// REMOVER A CHAVE NOME
// ADICIONAR UM ID EM CADA OBJ

const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Walla", idade: 47 },
  ];

  const nomes = pessoas.map(valor => valor.nome );
  console.log(nomes);


  const idades = pessoas.map(function(valor) {
    delete valor.nome;
    return valor;
  });
  console.log(idades);

  // PARA NÃO MODIFICAR O OBJETO ORIGINAL, VAMOS UTILIZAR O SPREAD
  const idNovo = pessoas.map(function(valor, indice) {
    const newObj = {...valor};
    newObj.id = indice;
    return newObj;
  }
);
  console.log(idNovo);
  console.log(pessoas);

