// AULA 55 - FOR IN

const frutas = ['Maça', 'Uva', 'Morango']; // ARRAY QUE SÓ TEM UMA DIMENSÃO É O MESMO QUE VETOR.

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }


// DIFERENTE DO FOR LOOP ANTERIOR, O FOR IN APENAS LÊ O ÍNDICE
for (let i in frutas){
    console.log(frutas[i]);
}

// COM OBJETOS

const pessoa = {
    nome: 'Ivny',
    sobrenome: 'Metzker',
    idade: 26
}

for (let i in pessoa) {
    console.log(i);
}

// ACESSANDO UM MÉTODO ESPECÍFICO DENTRO DO OBJETO

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

