// AULA 93 - PROTOTYPES

// Construtora -> molde (classe) (objeto)
function Pessoa (nome, sobrenome) {
    this.nome = nome; // atributo
    this.sobrenome = sobrenome; // atributo
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // método
}

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // Pessoa = Função construtora

console.dir(pessoa1);