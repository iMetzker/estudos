// AULA 82 - MÉTODO SPLICE (MÉTODO QUE REALIZA TODOS OS MÉTODOS DA AULA ANTERIOR (POP, PUSH, SHIFT))

// ARGUMENTOS DO SPLICE( ÍNDICE DE COMEÇO, ELEMENTOS A SEREM REMOVIDOS, ELEMENTOS PARA ADICIONAR SEPARADOS POR VÍRGULA )
// TAMBÉM SUPORTA NÚMEROS NEGATIVOS ONDE COMEÇA NO FINAL DO ARRAY COM -1

//               -5       -4      -3      -2      -1
//                0        1       2       3       4  
const nomes = ['Ivny', 'Maria', 'João', 'José', 'Kaio'];

//simular um pop
//const novoNomes = nomes.splice(-1,1);
const novoNomes = nomes.splice(4,1);
console.log(nomes, novoNomes);

// REMOVENDO TODOS OS ITENS A PARTIR DE DETERMINADO ÍNDICE DE UM ARRAY COM NUMBER.MAX_VALUE
const removidos = nomes.splice(1, Number.MAX_VALUE);
console.log(nomes, removidos);