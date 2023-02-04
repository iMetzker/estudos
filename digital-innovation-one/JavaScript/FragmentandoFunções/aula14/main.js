
// Importando meu arquivo com require

/* 
const funcoes = require('./funcoes-auxiliares');

console.log(funcoes.gets()); 

*/

// Escrevendo o mesmo código acima de forma diferente, chamando o objeto diretamente

const { gets, print } = require('./funcoes-auxiliares');

print(gets());


