// AULA 39 - AVALIAÇÃO DE CURTO CIRCUITO


// CHECANDO OS VALORES E O PRIMEIRO VERDADEIRO ELE RETORNA, MUDANDO DE NULL PARA ALGUM VALOR, JÁ O RETORNA. SE CASO TODOS FOREM VALORES FALSE, O VALOR QUE SERÁ RETORNADO É O ÚLTIMO.
const corUsuario = null;
const corPadrao = corUsuario || 'preto'; 

console.log(corPadrao);


// VALORES QUE RETORNAM FALSE = STRING VAZIA, 0, NULL E NAN.
//OPERADOR || - OR. 

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);