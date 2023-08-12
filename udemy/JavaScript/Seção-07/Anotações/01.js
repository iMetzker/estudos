// AULA 102 - CLASSES

// PARA CRIAR UM MÉTODO DENTRO DE UMA CLASSE, APENAS INSTANCIAR COM O NOME () {}. O CONSTRUCTOR É UM MÉTODO PRÓPRIO PARA RECEBER PARÂMETROS

class Pessoa {

    constructor ( nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    } // NÃO PRECISA DE ; NA CLASSE

    falar() {

    }

    comer() {

    }
};

// QUANDO EU INSTANCIO A CLASSE, ESTOU CRIANDO UM OBJETO A PARTIR DA CLASSE
const p1 = new Pessoa('Luiz', 'Ol');

console.log(p1);