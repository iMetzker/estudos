// AULA 50 - DESESTRUTURAÇÃO DE ARRAYS

let a ='A';
let b = 'B';
let c = 'C';

// DESESTRUTURANDO COM REATRIBUIÇÃO DE VALOR ATRAVÉS DE UM ARRAY
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);