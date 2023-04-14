// AULA 89 - REVISANDO

// PARA CHAMAR A CHAVE DE UM OBJETO PODEMOS TANTO PELO . QUANTO PELO ['']
 
const pessoa = {
    nome: 'Ivny',
    sobrenome: 'Metzker'
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

// EM CASO DE PRECISAR SER ACESSADO DINAMICAMENTE:

const chave = 'sobrenome';
console.log(pessoa[chave]);

// UTILIZANDO FUNÇÃO CONSTRUTORA 'NEW'
const pessoaContruida = new Object();
pessoaContruida.nome = 'Cris';
pessoaContruida.sobrenome = 'Lehman';
pessoaContruida.idade = 26;

console.log(pessoaContruida.nome);

// CRIANDO MÉTODOS
pessoaContruida.falaNome = function () {
    return `${this.sobrenome} está falando`;
}
pessoaContruida.falaNome();

// CRIANDO UM MÉTODO QUE RETORNA A DATA DE NASCIMENTO
pessoaContruida.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log (pessoaContruida.getDataNascimento());

for (let chaves in pessoaContruida) {
    console.log(chaves);
}

// FACTORY FUNCTION COM UM MÉTODO PROTEGIDO, ONDE FORA DA FUNCTION ELE NAO PODE SER ACESSADO
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa ('Ivny', 'Maria');
console.log(p1.nomeCompleto);


// CONSTRUCTOR FUNCTION ( A PALAVRA NEW CRIA UM OBJETO VAZIO E ATRELA O THIS DENTRO DA FUNÇÃO AO OBJETO - VARIA DE ACORDO COM O OBJETO QUE SERÁ CRIADO)

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa ('Luiz', 'Lauar');
const p3 = new Pessoa ('Luca', 'Kaio');
console.log(p2);

// TRAVANDO UM OBJETO DE SER EDITADO
Object.freeze(p1);
p1.nome = 'Carlo';
console.log(p1.nome);