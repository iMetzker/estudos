// AULA 94 - CONTINUAÇÃO

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camisa', 50);
p1.desconto(100);
console.log(p1);

// SETANDO UM OBJETO LITERAL

const p2 = {
    nome: 'Caneca',
    preco: 16
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(50);
console.log(p2);