// Aula 16 - Cálculo do IMC

const nome = "Ivny Metzker";
const idade = 26;
const peso = 70;
const altura = 1.74;

let imc = peso / Math.pow(altura, 2);
let anoDeNascimento = 2023 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura, nasceu em ${anoDeNascimento} e seu IMC é de`, imc.toFixed(1));