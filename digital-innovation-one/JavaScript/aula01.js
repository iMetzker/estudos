/*  Exemplo simples calculando quanto de gasto para uma viagem */

let valorgasolina = 5.79, km = 170, kmlt = 1, valortotal = 0;

valortotal = (km / kmlt) * valorgasolina;

console.log('Valor da viagem: ', valortotal.toFixed(2)); /* transformando a variárel em texto e arredondando para duas casas decimais */


valorgasolina = 8.90, km = 170, kmlt = 17;
valortotal = (km / kmlt) * valorgasolina;

console.log('Valor da viagem: ', valortotal.toFixed(2));