// AULA 84 - FILTER

//RETORNE PESSOAS COM NOME COM 7 LETRAS & MAIS DE 40 ANOS & NOME TERMINA COM 'A'

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Walla", idade: 47 },
];

const pessoasNomeGrande = pessoas.filter(valor => valor.nome.length >= 7);
console.log(pessoasNomeGrande);

const pessoasMaisVelhas = pessoasNomeGrande.filter(valor => valor.idade >= 40);
console.log(pessoasMaisVelhas);

// PARA ESTA SOLUÇÃO PRIMEIRO COLOCAMOS TODAS AS LETRAS DA STRING MINÚSCULAS COM TOLOWERCASE() E DEPOIS PROCURAMOS PELA ÚLTIMA LETRA COM ENDWITH.
const pessoasTerminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(pessoasTerminaComA);