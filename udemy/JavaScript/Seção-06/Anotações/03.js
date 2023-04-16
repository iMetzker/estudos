// AULA 91 - GETTERS E SETTERS ( SEGUINDO COM OBJECT.DEFINEPROPERTY)

// GETTER É PARA OBTER UM VALOR (UM MÉTODO DENTRO DA FUNÇÃO CONSTRUTORA)
// SETTER É PARA SETAR UM VALOR (CONFIGURÁ-LO) // VALIDAR O VALOR

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
  
    Object.defineProperty(this, "estoque", {
      enumerable: true,
      configurable: false,
      get: function () {
        return estoquePrivado;
      },
      set: function (valor) {

        // VALIDAR SE O VALOR É UM NUMERO
        if (typeof valor !== 'number') {
          //console.log('Bad value'); AO INVÉS DE EXIBIR NA TELA, VAMOS CRIAR UM TYPE ERROR
          throw new TypeError ('Bad value')
        }

        estoquePrivado = valor;
      }
    });
  }
  
  const p1 = new Produto("Camiseta", 20, 3);
  p1.estoque = 'afsg';
  console.log(p1.estoque);
  

