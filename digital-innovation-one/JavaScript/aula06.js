// Funções

// Estabelecendo uma função, não será executada até ser chamada
function sayMyName(name) {
    console.log('Your name is: ', name);
}

// Chamando a função para execução

sayMyName('Ivny');
sayMyName('Ingrid');

function quadrado(valor) {
    return Math.pow(valor, 2);
}

const quadradoNumero = quadrado(2);
console.log(quadradoNumero);


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log (incrementarJuros(100,10));