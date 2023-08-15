// AULA 103 - GETTER E SETTER
// SIMULAR UM CARRO QUE NÃO PODE ACELERAR DEMAIS OU DEMINUIR DEMAIS


// PARA CRIAR UMA CHAVE PRIVADA DENTRO DE UM OBJ É UTILIZADO UM MÉTODO CHAMADO SIMBOL
const  _velocidade = Symbol('velocidade'); // criei uma chave para não poder ser acessada de fora do objeto

class Carro {
  constructor(nome) {
    //MÉTODO PARA PASSAR PARÂMETROS PARA A CLASS
    this.nome = nome;
    this[_velocidade] = 0;
  }

  // SIMULANDO QUE O SYMBOL PODE SER ALTERADO POR FORA
  set velocidade(valor) {  // CHECAR E DEPOIS ALTERAR O VALOR
    if (typeof valor !== 'number') return;
    if(valor>= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() { // ABRINDO COM UM GET PARA SER ACESSADO POR FORA
    return this[_velocidade]; // VALOR REAL
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  desacelerar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;;;
  }
}

const c1 = new Carro("Fusca");

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

c1.velocidade = 999; // ACESSANDO O SETTER (SE TORNA ATRIBUTO)
console.log(c1.velocidade); // ACESSANDO O GETTER (SE TORNA ATRIBUTO)

// SE TORNA ATRIBUTO POIS NÃO PRECISA CHAMAR COMO MÉTODO c1.velocidade()
