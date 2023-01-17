// AULA 27 - Objeto Math

let num1 = 9.54578;

//Arredondar o valor para baixo
let num2 = Math.floor(num1); 
console.log("Numero: " + num2);

//Arredondar o valor para cima
num2 = Math.ceil(num1); 
console.log("Numero: " + num2);

//Arredonda o valor para o numbero mais próximo, .5 ^
num2 = Math.round (num1); 
console.log("Número: " + num2);

//Mostra qual maior número
console.log("Maior número: " + Math.max(1,2,3,4,5, -10, -50, 1500, 9)); 

//Gerando um número aleatório entre 5 e 10
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(`Número aleatório: ${aleatorio}`);

