class pessoa {
    nome;
    idade;

    constructor (nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
   
}

function compararPessoa (p1,p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome}  é mais velha que ${p2.nome}`);
    } 
    else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    }
    else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
}

const ivny = new pessoa ('ivny', 26);
const barbara = new pessoa ('barbara', 26);

compararPessoa (ivny,barbara);
