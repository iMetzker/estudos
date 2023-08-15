// AULA 104 - HERANÇA COM CLASSES

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }

    this.ligado = false;
  }
}

// EXTENDENDO PARA UMA NOVA CLASSE OS ATRIBUTOS DE OUTRA, HERANÇA EM CLASSE

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome); // PARA CHAMAR UM PARÂMETRO HERDADO  DE OUTRA CLASSE, CHAMAMOS O SUPER() ONDE  DENTRO DOS () ESTARÁ O PARÂMETRO CHAMADO
        this.cor = cor;
    }
}

const p1 = new Smartphone('Iphone', 'Preto');
console.log(p1);
