// AULA 90 - OBJECTS.DEFINE.PROPERTY() E PROPERTIES (FREEZANDO APENAS UMA OU MAIS PROPRIEDADE DO OBJETOS E DEIXANDO AS OUTRAS NORMAIS (EDITÁVEIS))

// O THIS DENTRO DA FUNÇÃO CONSTRUTORA REFERENCIA AO PRÓPRIO OBJETO CRIADO
//Object.defineProperty(this(objeto que está sendo criado), propriedade que quero trabalhar, { objeto que seja exibido })
// onde enumerable: mostra a chave , value: de onde virá o valor da chave , writable: pode alterar o valor , configurable: pode reconfigurar a chave em dado momento com defineProperty novamente
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  // PROPERTY
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor da chave
    writable: true, // pode alterar o valor da chave
    configurable: false, // como configurar novamente a chave ou apagar a chave com delete
  });

  // PROPERTIES
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 300000;
console.log(p1);

// RETORNANDO UM ARRAY APENAS COM AS CHAVES DO OBJETO // TAMBÉM FUNCIONA COM FOR IN
console.log(Object.keys(p1));
