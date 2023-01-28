// AULA 52 - ESTRUTURA DE REPETIÇÃO FOR

// RETORNANDO NÚMEROS PARES
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);    
}

// COM ARRAY
const frutas = ['Maça', 'Pêra', 'Morango', 'Uva', 'Passas'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);    
}