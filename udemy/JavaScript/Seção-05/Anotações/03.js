// AULA 83 - CONCATENANDO ARRAYS

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const num3 = num1.concat(num2, [7,8,9], 'Luiz');
console.log(num3);

// REALIZANDO A MESMA CONCATENAÇÃO COM O spread

const a = [...num1, ...num2, 'Luiz', ...[7,8,9]];
console.log(a);
