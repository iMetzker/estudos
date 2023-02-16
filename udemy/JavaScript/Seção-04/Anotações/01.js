// AULA 68 - DECLARAÇÃO DE FUNÇÃO HOISTING - PODE SER CHAMADA ANTES DE DECLARADA
falaOi();

function falaOi () {
    console.log('Oi');
}

// FIRST-CLASS OBJECTS (OBJETOS DE PRIMEIRA CLASSE) / FUNCTION EXPRESSION > VARIÁVEL RECEBE UMA FUNÇÃO E SE TORNA UMA FUNÇÃO
const souUmDado = function () {
    console.log('sou um dado');
}

//PODENDO SER USADO DA SEGUINTE FORMA:
function executaFuncao(funcao) {
    console.log('Vou executar sua funcao aqui:')
    funcao();
}
executaFuncao(souUmDado);

// DENTRO DE UM OBJETO
const objeto = {
    falar: function () {
        console.log('Estou falando...');
    }
};
objeto.falar();

// QUANDO SE JOGA UMA FUNCTION COMO PARÂMETRO DE OUTRA FUNÇÃO, POR EXEMPLO, ELA É TRATADA COMO DADO


