// SOMANDO DOIS VALORES

function soma(num1, num2) {
  const resultado = num1 + num2;
  return resultado;
}

console.log(soma(2, 2));
console.log(soma(500, 345));
console.log(soma(24, 96));
console.log(soma());

// NÃO SENDO INSERIDO UM VALOR NOS PARÂMETROS, IRÁ RETORNAR UM ERRO DE NaN. PARA INSERIR UM VALOR PADRÃO CASO NÃO SEJA INSERIDO NENHUM, NA FUNÇÃO INSERIMOS: function soma (num1 = 1, num2 = 1), ASSIM POR PADRÃO CADA PARÂMETRO VALERÁ 1 POR EXEMPLO.
