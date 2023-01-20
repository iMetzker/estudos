// AULA 32 - OBJETOS (BÁSICO)

// OBJETOS SÃO GRUPOS COM ATRIBUTOS {}
const pessoa1 = {
  nome: "Maria",
  sobrenome: "Antonia",
  idade: 26,
};

const pessoa2 = {
  nome: "Joana",
  sobrenome: "Duarte",
  idade: 36,
};

console.log(pessoa1.nome);

// DA FORMA ACIMA AINDA FICA SUJO NOSSO CÓDIGO, PODEMOS MELHORÁ-LO USANDO FUNCTION
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa01 = criaPessoa("Maria", "Antonia", 26);
console.log(pessoa01.nome);

// E PODEMOS SEGUIR...
const pessoa02 = criaPessoa("Luiza", "Ferreira", 24);
const pessoa03 = criaPessoa("Maria", "Carla", 30);
const pessoa04 = criaPessoa("Joana", "Antonia", 41);

// SIMPLIFICANDO O OBJETO DENTRO DA FUNÇÃO, POIS OS VALORES SE REPENTEM nome: nome, sobrenome: sobrenome, idade: idade
function criaPessoaSimplificando(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}
