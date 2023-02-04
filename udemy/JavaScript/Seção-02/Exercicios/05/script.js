// AULA 28 - JUNTANDO O HTML COM O JS

const numero = Number(prompt("Digite um número: "));

// SELECIONANDO O ELEMENTO HTML PELO ID
const numeroTitulo = document.getElementById('numero-titulo');
const corpo = document.getElementById('texto');

// TRABALHANDO COM A INCLUSÃO DO ELEMENTO NA PÁGINA

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>A raíz quadrada desse número é: ${numero ** (1/2)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`;
