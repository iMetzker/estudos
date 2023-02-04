// AULA 31 - FUNÇÕES BÁSICO

function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
    return nome;
}

// FUNÇÃO, POR PADRÃO RETORNA 'UNDFINED', PARA RETORNAR ALGUM VALOR ESPECIFICAMOS ISSO DENTRO DO CORPO DA FUNÇÃO (A FUNÇÃO PODE OU NÃO RETORNAR ALGUM VALOR)
const retorno = saudacao('Ivny');
console.log(retorno);

// O IDEAL É RETORNAR O VALOR DIRETO, NO CASO DE RETORNAR ALGO
function ideal(sobreNome){
    return `Bom dia ${sobreNome}!`
}

const idealRetorno = ideal('Metzker');
console.log(idealRetorno);