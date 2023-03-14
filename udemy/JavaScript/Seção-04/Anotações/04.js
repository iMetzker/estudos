// AULA 71 - ESCOPO LÉXICO
// DENTRO DE UMA FUNCTION A BUSCA POR VARIÁVEIS É DE DENTRO PARA FORA, DE FORMA COM QUE ELA PROCURA PRIMEIRO AS VARIÁVEIS DECLARADAS DENTRO DA FUNÇÃO ATÉ O ESCOPO GLOBAL, EM FORMATO BOLHA


const nome = "Ivny";

function falaNome() {
  console.log(nome);
}

function usaFalaNome(){
    const nome = 'Metzker';
    falaNome();
}

usaFalaNome();

