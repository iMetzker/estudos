// Mais sobre string  - aula 24

//               01234567
let umaString = "Um texto";

console.log(umaString[3]);

// Para saber onde começa o índice da palavra
console.log(umaString.indexOf('texto'));

// Utilizando o match com expressão regular ([a-z]/g) que retorna todas as letras minúsculas
console.log(umaString.match(/[a-z]/g));

// substituindo elementos do texto com replace, também aceita expressão regular (/Um/g), sendo que 'g' é para se aplicar a tudo, ou seja, substituir todo elemento que for Um por Dois
console.log(umaString.replace(/Um/g, 'Dois'));

// Descobrindo o tamanho da string com length
console.log(umaString.length);

// Deixando todo o texto maiúsculo toUpperCase / toLowercase minúsculo
console.log(umaString.toUpperCase('um Texto'));
