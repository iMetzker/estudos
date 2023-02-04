// AULA 51 - DESESTRUTURAÇÃO VIA ATRIBUIÇÃO (OBJETOS)

const pessoa = {
    nome: 'Ivny',
    sobrenome: 'Metzker',
    idade: 26,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
};
// DESESTRUTURANDO:
//const {nome, sobrenome} = pessoa;
//console.log(nome, sobrenome);

// MUDANDO O NOME DA UMA VARIÁVEL PELA CHAVE DO OBJETO, NESTE CASO COM UMA ATRIBUIÇÃO VAZIA PADRÃO, SE CASO NAO TIVER NADA VAI FICAR VAZIO, SE TIVER ALGUM VALOR, VAI MOSTRÁ-LO:
const {nome: teste = '', sobrenome} = pessoa;
console.log(teste,sobrenome);