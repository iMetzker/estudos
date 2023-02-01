// AULA 63 - TRATANDO ERROS

// TRY E CATCH - FUNCIONAM COMO IF E ELSE, PRIMEIRO NO BLOCO TRY O PROGRAMA IRÁ TENTAR EXECUTAR O CÓDIGO, CASO DÊ ALGUM ERRO IRÁ CAIR NO CATCH E PODEMOS INFORMAR O QUE QUISERMOS PARA O USUÁRIO OU FAZER ALGO PARA EVITAR O ERRO. O ERRO FICARÁ ARMAZENADO NA VARIÁVEL DO CATCH.

try {
  console.log(naoExisto);
} catch (e) {
  console.log("Erro Desconhecido");
}

// EXEMPLO COM THROW (CRIANDO O NOSSO PRÓPRIO ERRO)

function soma(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error ('x e y precisam  ser numeros');
    }
    return x+y;
}

try {
    console.log(soma('a',1));
    console.log(soma(2,2));
} catch (e) {
    console.log('Algo amigável para exibir para o usuário');
}