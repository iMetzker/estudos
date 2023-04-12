// AULA 81 - REVISANDO BÁSICO EM ARRAYS


// TODA ALTERAÇÃO FEITA EM NOVO OU NOMES, SERÁ REFLETIDA EM AMBOS OS ARRAYS COM A UTILIZAÇÃO DE CONST NOVO = NOMES, PARA QUE SEJA REALIZADA UMA CÓPIA INDEPENDENTE REALIZAMOS A UTILIZAÇÃO DO REST OPERATION '...'
const nomes = ['Eduardo', 'Ivny', 'Maria'];
const novo = [...nomes];

// REMOVENDO O ÚLTIMO ITEM DO ARRAY E RETORNANDO AO MESMO TEMPO
const removido = novo.pop();
console.log(removido);

// REMOVENDO O PRIMEIRO ITEM E O RETORNANDO
const removido01 = novo.shift();
console.log(removido01);

// ADICIONANDO UM ITEM AO FINAL DO ARRAY
novo.push('Joaquim', 'Josefa');

console.log(nomes);
console.log(novo);

// FATIANDO UM ARRAY COM SLICE (X,Y) ONDE X É O ÍNDICE DE INÍCIO E O Y É O ÚLTIMO
const indice = ['Kaio', 'Kaique', 'Karen', 'Keven'];
const indiceFatiado = indice.slice(0,-1); // -1 utilizado para ser percorrido em todo o array
console.log(indiceFatiado);

// TRANSFORMANDO UMA STRING EM ARRAY
const array = 'Ivny,Metzker,Lyra'
const separando = array.split(',');
console.log(separando);