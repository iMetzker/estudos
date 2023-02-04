
// Estrutura de Repetição

/* const alunos = ['João', 'Maria', 'Vitor'] -> Array (lista);

// Acessando  a lista e exibindo a posição 0
console.log(alunos[0]);

// Adicionando mais itens a minha lista

alunos.push('Renan');

// Adicionando diretamente a posição, sendo que sera substituido

alunos[2] = 'Marcos'

//Removendo o último da lista
alunos.pop();

// Removendo o primeiro da lista
alunos.shift();
console.log(alunos);

// Adicionando uma lista vazia
const notas = [];
notas.push (5);
notas.push (7);
notas.push (8);
notas.push (2);
notas.push (5);

// Dado uma lista, para saber  o tamanho da lista .length
console.log(notas.length); */

// Exemplo
/* 
const nome = 'Ivny Xavier Metzker';

 for (let i = 0; i < nome.length; i++) {
    const letra = nome[i]; (retornar nossa constante na posição index)
    console.log(letra);
 }

*/


 const notas = [];
notas.push (5);
notas.push (7);
notas.push (8);
notas.push (2);
notas.push (5);
notas.push (8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma  = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(1));




