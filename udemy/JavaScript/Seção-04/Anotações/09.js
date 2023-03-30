// AULA 76 -  FUNÇÕES CONSTRUTORAS A DIFERENÇA DE CONSTRUTORA (CRIA O OBJETO) FUNÇÃO FÁBRICA (RETORNA UM OBJETO) - AMBAS RETORNAM UM OBJETO
// NA FUNÇÃO CONSTRUTORA A PRIMEIRA LETRA SEMPRE É MAIÚSCULA > Pessoa (new)
// podemos criar variáveis privadas com const e não utilizando o this

function Pessoa(nome, sobrenome) {
  // VARIÁVEL PRIVADA
  const ID = 123456;
  const metodoInterno = function () {};

  // ATRIBUTOS OU MÉTODOS PÚBLICOS
  this.nome = nome;
  this.sobrenome = sobrenome;
}
// new CRIAS UM OBJETO VAZIO, FAZ O THIS APONTAR PARA O OBJETO VAZIO, E RETORNA O OBJETO PARA A VARIÁVEL, DISPENSANDO O USO DO RETURN
const p1 = new Pessoa("Ivny", "Metzker");
const p2 = new Pessoa("Sandra", "Lemos");

console.log(p1);
