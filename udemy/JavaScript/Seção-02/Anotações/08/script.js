// AULA 29 - ARRAYS (BÁSICO)

const alunos = ['Maria', 'João', 'Luiz'];

// EDITANDO UM ELEMENTO DO ARRAY
alunos[0] = 'Eduardo';

// VERIFICANDO O TAMANHO DO ARRAY
console.log(alunos.length);

// ADICIONANDO ELEMENTOS AO FINAL DO ARRAY
alunos.push('Ivny');
alunos.push('Cristiano');

// ADICIONANDO ELEMENTOS NO COMEÇO DO ARRAY
alunos.unshift('Vitoria');
console.log(alunos);

// REMOVENDO O ÚLTIMO ELEMENTO DO ARRAY - PODENDO SER ARMAZENADO DENTRO DE UMA CONST INCLUSIVE const removido = alinos.pop();
alunos.pop();
console.log(alunos);

// REMOVENDO O PRIMEIRO ELEMENTO DO ARRAY, TAMBÉM PODE SER ARMAZENADO DENTRO DE UMA CONST
alunos.shift();
console.log(alunos);

// DELENTANDO UM ELEMENTO DO ARRAY E DEIXANDO O ÍNDICE VAZIO
delete alunos[1];
console.log(alunos);

// FATIANDO O ARRAY E PEGANDO O FINAL (-, (NUMERO NEGATIVO)) OU DO COMEÇO, INSERINDO O (INICIO, FIM)
console.log(alunos.slice(0,2));

// VERIFICANDO SE É UMA INSTÂNCIA DE ARRAY
console.log(alunos instanceof Array);