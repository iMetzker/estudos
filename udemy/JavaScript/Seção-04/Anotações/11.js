// AULA 79 - FUNÇÕES GERADORAS (TRABALHA QUASE COMO UM PAUSE NA FUNCTION)- SÃO FUNÇÕES QUE ENTREGAM UM VALOR POR VEZ QUANDO SÃO CHAMADAS

// YIELD TRABALHA COMO UM RETURN, QUANDO CHAMA A FUNÇÃO VAI CHAMAR UM YIELD POR VEZ

function* geradora1 () {
    yield 'Valor 1';
    yield 'valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
// PARA VER O RETORNO DA FUNÇÃO GERADORA É PRECISO USAR O MÉTODO NEXT
// IRÁ RETORNAR UM OBJETO COM DUAS CHAVEZ, O VALUE E O DONE QUE É SE O GERADOR ACABOU

//console.log(g1.next().value);
//console.log(g1.next().value);
//console.log(g1.next());
//console.log(g1.next());

// ITERANDO COM A FUNÇÃO GERADORA
for (let valor of g1) {
    console.log(valor);
}
