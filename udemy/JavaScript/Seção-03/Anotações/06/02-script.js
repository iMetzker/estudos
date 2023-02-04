// DESESTRUTURANDO UM ARRAY
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// PEGANDO O PRIMEIRO E O SEGUNDO ELEMENTO DO ARRAY AO MESMO TEMPO QUE SE CRIA DUAS VARIÁVEIS
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero);

// OPERADOR ...REST
const [primeiroNum, ...resto] = numeros;
console.log(primeiroNum, resto);


// ACESSANDO UM ELEMENTO DE UM ARRAY ANINHADO COM VÁRIOS ARRAYS, FORMA MAIS SIMPLES
//                  0          1          2
//               0  1  2    0  1  2    0  1  2     
const array = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], ];

console.log(array[1][2]);

// REFAZENDO O EXERCÍCIO ACIMA COM DESESTRUTURAÇÃO VIA ATRIBUIÇÃO
const [lista1, lista2, lista3] = array;
console.log(lista2[2]);