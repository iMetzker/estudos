const pessoa = {
  nome: "Ivny",
  sobrenome: "Metzker",
  idade: 26,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

// CAPTURANDO UM ELEMENTO DENTRO DO OBJETO QUE ESTÁ DENTRO DE OUTRO OBJETO
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);
