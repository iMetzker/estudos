
//  Imprimindo o maior valor encontrado

const { gets, print } = require('./functions');

const  quantidadeDeAlunos =  gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}


print(maiorValor);