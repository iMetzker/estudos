// AULA 93 - PROTOTYPES

// TODOS OS OBJETOS TEM UMA REFERÊNCIA INTERNA PARA UM PROTÓTIPO (_PROTO_) QUE VEM DA PROPRIEDADE PROTOTYPE DA FUNÇÃO CONSTRUTORA QUE FOI USADA PARA CRIÁLO. QUANDO TENTAMOS ACESSAR UM MEMBRO DE UM OBJETO, PRIMEIRO O MOTO DO JS VAI TENTAR ENCONTRAR ESTE MEMBRO NO PRÓPRIO OBJETO E DEPOIS A CADEIA DE PROTÓTIPOS É USADA ATÉ O TOPO (NULL) ATÉ ENCONTRAR (OU NÃO) TAL MEMBRO.

// Construtora -> molde (classe) (objeto)
function Pessoa (nome, sobrenome) {
    this.nome = nome; // atributo
    this.sobrenome = sobrenome; // atributo
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // método
}

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // Pessoa = Função construtora

const data = new Date();

console.dir(pessoa1);
console.dir(data);

// QUANDO SE CRIA UM OBJETO COM UMA FUNÇÃO CONSTRUTORA JÁ VEM INCLUSO O PROTOTYPE, ONDE O PROTOTYPE É LINKADO COM TODOS OS OBJETOS LINKADOS AO OBJETO PAI

Pessoa.prototype.estouAqui = 'Hahahaha'

console.log(pessoa1.estouAqui)

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}
