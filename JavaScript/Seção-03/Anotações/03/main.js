// AULA 45 - OPERADOR TERNÁRIO ? : (OPERANDO PARA SUBTITUIR UM IF, ELSE)

const pontuacaoUsuario = 999;

//if (pontuacaoUsuario >= 1000) {
//    ConstantSourceNode.log('Usuário VIP');
// } else {
//    console.log('Usuário normal');
//}

// COM O OPERADOR, ONDE '?' REPRESENTA O VALOR PARA VERDADEIRO E ':' O VALOR PARA FALSO.

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário Normal';

// RETOMANDO O OPERADOR ||
const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);

