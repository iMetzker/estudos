// AULA 65 - FUNÇÕES PARA CONTROLAR TIMER

// setInterval - CONTROLA A EXECUÇÃO DE UMA FUNÇÃO EM DETERMINADO TEMPO (MEDIDO EM MILISSEGUNDO)

function mostrarHora () {
    let data = new Date ();
    return data.toLocaleString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

setTimeout (function(){
    clearInterval(timer);
}, 3000)
