// AULA 59 - BREAK E CONTINUE ( FUNCIONA DENTRO DE QUALQUER LAÇO DE REPETIÇÃO)

// CONTINUE - É UTILIZADO ANTES DA AÇÃO QUE SERÁ TOMADA DENTRO DO LAÇO DE REPETIÇÃO, INDICA QUE VAI 'PULAR' AQUELA CONDIÇÃO E CONTINUAR A PARTIR DALI

// BREAK - DEPOIS DESTE COMANDO NADA MAIS NO CÓDIGO É EXECUTADO

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (numero of numeros) {
    if(numero % 2 === 0) {
        continue;
    }
    console.log(numero);

    if(numero === 7) {
        break;
    }
}