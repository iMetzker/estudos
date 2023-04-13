// AULA 88 - FOR EACH ( VAI APENAS ITERAR SOBRE OS VALORES, NÃO VAI MUDAR O ARRAY)

const numeros = [5, 50, 10, 15, 7, 8, 1, 0, 18, 22, 27, 25];

let total = 0;
numeros.forEach(valor => {
    total += valor;
});

console.log(total);

