// DELEGANDO PARA UMA FUNÇÃO A CONTINUAÇÃO DE OUTRA

function* geradora2 () {
    yield 0;
    yield 1;
    yield 2;
}

// DELEGANDO A EXECUÇÃO DA FUNÇÃOI GERADORA 2
function* geradora3() {
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

const g2 = geradora3();

for(let valor of g2){
    console.log(valor);
}