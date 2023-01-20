// FUNÇÃO ANÔNIMA

const raiz = function (n) {
  return n ** (1 / 2);
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// ARROW FUNCTION - QUANDO TEMOS APENAS UM PARÂMETRO E APENAS UMA LINHA DE CÓDIGO, PODEMOS SIMPLIFICAR TODO O ESQUELETO ACIMA PARA:
const raizArrow = n => n ** (1 / 2);

console.log(raizArrow(9));
console.log(raizArrow(16));
console.log(raizArrow(25));
