// AVALIAÇÃO DE CURTO CIRCUITO

const corUsuario = null;
const corPadrao = corUsuario || 'preto'; 
// ^ CHECA OS VALORES E O PRIMEIRO VERDADEIRO ELE RETORNA, MUDANDO DE NULL PARA ALGUM VALOR, JÁ O RETORNA

console.log(corPadrao);