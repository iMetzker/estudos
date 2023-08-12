// 100 - FACTORY FUNCTIONS + PROTOTYPE

// CRIANDO OBJETOS LITERAIS COM APENAS UM MÉTODO
const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
};

function criaPessoa (nome, sobrenome) {
return Object.create(pessoaPrototype, {
    nome: {
        value: nome
    },
    sobrenome: {
        value: sobrenome
    }
}); 
}

// UTILIZANDO SPREAD OPERATOR PARA CHAMAR O MÉTODO
// const pessoaPrototype = { ...falar, ...beber, ...comer};

// UTILIZANDO ASSIGN - CRIA UM OBJETO VAZIO E COLOCANDO AS VARIÁVEIS DOS MÉTODOS
const pessoaPrototype = Object.assign({}, falar, comer, beber);


const p1 = criaPessoa('ivny', 'metzker');
console.log(p1.falar())