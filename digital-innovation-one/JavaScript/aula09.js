// Objetos

// const dados = {
//     nome: 'Ivny Metzker',
//     idade: 26,

//     descrever: function (){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// dados.descrever ();


// Classe é a definição de um objeto, onde uma function não precisa ser invocada com a palavra em si, pois aqui ela se comporta como método.
// Para invocar a classe informamos new e seu nome

class pessoa {
    nome;
    idade;


    // Quando uma pessoa é instanciada
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }


    descrever (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

/* Com o constructor conseguimos aprimorar o código
const ivny = new pessoa ();
ivny.nome = 'Ivny Metzker';
ivny.idade = 26;

const ana = new pessoa ();
ana.nome = 'Ana Silva';
ana.idade = 24;

ivny.descrever ();
ana.descrever (); */

const ivny = new pessoa ('Ivny Metzker', 26);
ivny.descrever ();

