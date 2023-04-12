// AULA 84 - FILTER (RECEBE UMA FUNÇÃO DE CALLBACK QUE ITERA SOBRE CADA ITEM DO ARRAY)

// RETORNAR OS NÚMEROS MAIORES QUE 10

const numeros = [5, 50, 10, 15, 7, 8, 1, 0, 18, 22, 27, 25];

// recebe 3 coisas a função que iremos usar dentro do filter, REQUER QUE RETORNE UM BOOLEAN
function callbackFilter (valor, indice, array) {
return valor > 10 ? true : false;
}

// AO PASSAR A FUNÇÃO PARA O FILTER NÃO QUEREMOS QUE ELA EXECUTE E SIM QUE O FILTER A EXECUTE, POR ISSO A PASSAMOS APENAS COM A REFERÊNCIA
const a = numeros.filter(callbackFilter);
console.log(a);

// REFATORANDO O CÓDIGO PARA MAIS LIMPO E MENOR

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);
