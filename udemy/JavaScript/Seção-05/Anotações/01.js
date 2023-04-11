// AULA 81 - REVISANDO BÁSICO EM ARRAYS


// TODA ALTERAÇÃO FEITA EM NOVO OU NOMES, SERÁ REFLETIDA EM AMBOS OS ARRAYS.
const nomes = ['Eduardo', 'Ivny', 'Maria'];
const novo = nomes;


nomes[2] = 'João';
delete nomes[2];

novo.pop();
console.log(nomes);