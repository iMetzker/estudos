// AULA 91 - GETTERS E SETTERS ( SEGUINDO COM OBJECT.DEFINEPROPERTY)

// GETTER É PARA OBTER UM VALOR
// SETTER É PARA SETAR UM VALOR (CONFIGURÁ-LO)

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  
    Object.defineProperty(this, "estoque", {
      enumerable: true,
      value: estoque,
      writable: true,
      configurable: false,
    });
  }
  
  const p1 = new Produto("Camiseta", 20, 3);
  console.log(p1);
  

