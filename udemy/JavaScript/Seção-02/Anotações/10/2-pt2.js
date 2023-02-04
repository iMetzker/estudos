// MÉTODO (FUNCTION DENTRO DE UM OBJETO, NÃO É NECESSÁRIO A PALAVRA FUNCTION)

const pessoa1 = {
    nome: 'Ivny',
    sobrenome: 'Metzker',
    idade: 26,

    fala () {
        console.log(`Minha idade atual é ${this.idade}`);
    },

    incrementaIdade (){
        this.idade++;
    }

};

pessoa1.fala();
pessoa1.incrementaIdade ();
pessoa1.fala();
pessoa1.incrementaIdade ();
pessoa1.fala();
pessoa1.incrementaIdade ();
pessoa1.fala();