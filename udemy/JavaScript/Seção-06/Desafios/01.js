// AULA 99 - Polimorfismo

// MANEIRA QUE TEM DE FAZER MÉTODOS SE COMPORTAREM DE MANEIRAS DIFERENTES, AGINDO NAS FILHAS DA FUNÇÃO CONSTRUTORA

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
} // FUNÇÃO CONSTRUTORA

// FAZER O MÉTODO DE SACAR SE COMPORTAR DIFERENTE

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente R$ ${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag./C: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
} // HERDANDO AS PROPRIEDADES DE OUTRA FUNCTION CONSTRUCTOR

// FAZENDO UM LINK PARA O PROTOTYPE
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente R$ ${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

// POLIMORFISMO DO MÉTODO SACAR
function ContaPoupança(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;

const cp = new ContaPoupança(30, 22, 0)
cp.depositar(10);
cp.sacar(90);
cp.sacar(100);


const cc = new ContaCorrente(21, 22, 0, 100);
cc.depositar(10);
cc.sacar(90);
cc.sacar(100);
