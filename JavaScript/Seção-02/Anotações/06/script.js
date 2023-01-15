// MAIS SOBRE NUMBERS - AULA 26

let num1 = 1;
let num2 = 2;
let num3 = 500;

console.log(num1.toString() + num2.toString());
console.log(typeof num1);

// Mostrando uma representação binária do número
console.log(num3.toString(2));

// Verificando se o number é inteiro Retorno: True or False
console.log(Number.isInteger(num1));

//Verificando se a conta é válida Retorno: True or False
console.log(Number.isNaN(num1 * num2));

// Padrão do Js para precisão de numeros flutuantes: IEEE 754-2008
let num4 = 0.7;
let num5 = 0.1;

num4 += num5; // 8
num4 += num5; // 9
num4 += num5; // 1.0

// Resolvendo o problema do resultado não ser inteiro com = parseFloat e toFixed.
num4 = parseFloat(num4.toFixed(1));
console.log(num4);

