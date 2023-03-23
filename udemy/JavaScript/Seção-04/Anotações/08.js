// AULA 75 - FUNÇÕES FÁBRICA

// THIS SE REFERE A QUEM CHAMA
function criaPessoa (nome, sobrenome){
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        }
    };
}

const p1 = criaPessoa ('Ivny', 'Metzker');
console.log(p1.fala('salando sobre JS'));