// AULA 75 - FUNÇÕES FÁBRICA

// THIS SE REFERE A QUEM CHAMA

// QUANDO USAMOS O GET ANTES DO MÉTODO (NA FUNÇÃO), A FUNÇÃO PASSA A SE COMPORTAR COMO ATRIBUTO E NAO COMO MÉTODO, NÃO SENDO NECESSÁRIO O USO DE imc() e PODENDO SER CHAMADA DIRETO COMO imc. EX: p1.imc
function criaPessoa (nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        //GETTER
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        },

        //SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' '); //DIVIDIR A SENTENÇA POR ESPAÇO
            this.nome = valor.shift(); // REMOVE O PRIMEIRO VALOR E O MOSTRA AO MESMO TEMPO
            this.sobrenome = valor.join(' '); //MOSTRA TUDO QUE SOBROU
        },

    };
}

const p1 = criaPessoa ('Ivny', 'Metzker', 1.7, 70);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('falando'));