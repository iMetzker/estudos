// AULA 78 - FUNÇÕES RECURSIVAS - QUANDO A FUNÇÃO CHAMA ELA MESMA DENTRO DELA

function recursive (max) {
console.log(max);
if (max >= 10) return;
max++;
recursive(max);
}

recursive(0);