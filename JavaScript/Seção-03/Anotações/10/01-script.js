// AULA 56 - FOR OF

const nome = 'Ivny Metzker';

// FOR IN
for(let i in nome){
    console.log(nome[i]);
}

// FOR OF LÊ O ÍNDICE E RETORNA O VALOR, DIFERENTE DO FOR IN QUE RETORNA O ÍNDICE

for (let i of nome) {
console.log(i);
}