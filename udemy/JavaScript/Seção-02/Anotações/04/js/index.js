// Utilizando o console do navegador

alert('Bem vindo! Vamos fazer uma conta simples, digite alguns números e vamor ver o resultado: numero 01 + numero 02 * numero 3')

const num01 = prompt('Digite um número: ');
const num02 = prompt('Digite outro número: ');
const num03 = prompt('Digite seu último número: ');

const resultado = (Number(num01) + Number(num02)) * Number(num03);

alert(`O resultado da sua conta de ${num01} + ${num02} * ${num03} foi: ${resultado}`);

