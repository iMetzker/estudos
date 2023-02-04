/* Condicional simples - Descobrindo se um número é ímpar ou par */

// Estrutura simples com o if e else (se e senão), pode ter um se dentro de um senão, podendo formar uma grande estrutura dessa forma utilizando o senão se (else if)

const numero = 2;
const isNumeroPar = (numero % 2) === 0;

if (numero === 0){
    console.log ('Este número é inválido: ', numero)
}
else if (isNumeroPar){
    console.log('Este número é PAR: ', numero);
}

else {
    console.log ('Este número é ÍMPAR: ', numero);
}
