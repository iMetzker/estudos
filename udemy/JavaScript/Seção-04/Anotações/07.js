// AULA 74 - IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function (idade, peso, altura) {
  const sobrenome = "Metzker";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Ivny"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(26, 70, 1.74);
