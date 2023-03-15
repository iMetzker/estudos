// AULA 72 - CLOSURES

// NADA MAIS É DO QUE A HABILIDADE DA FUNÇÃO DE ACESSAR SEU ESCOPO LÉXICO, ELA FECHA A FUNÇÃO

function retornaFuncao () {
    const nome = 'Ivny';
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao();
console.dir(funcao());