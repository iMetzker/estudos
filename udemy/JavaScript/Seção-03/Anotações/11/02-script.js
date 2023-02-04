// REPETINDO UMA FUNÇÃO ATÉ ENCONTRAR O NÚMERO 10

function randomNumber (min, max){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

const min = 1;
const max = 50;
let rand = randomNumber(min,max);

while (rand !== 10) {
    rand = randomNumber(min,max);
    console.log(rand);
}

console.log('######');

// A DIFERENÇA DO WHILE E DO WHILE
// WHILE - SÓ ENTRA NO LAÇO SE A CONDIÇÃO FOR TRUE
// DO WHILE - PRIMEIRO REALIZA A AÇÃO DEPOIS VERIFICA A CONDIÇÃO

do {
    rand = randomNumber(min,max);
    console.log(rand);
} while (rand !== 10);