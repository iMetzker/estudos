class Carro {
    marca;
    cor;
    kmPorLt;

    constructor(marca, cor, kmPorLt) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLt = kmPorLt;
    }

    gastoViagem(km, combustivel) {
        return (km / this.kmPorLt) * combustivel;
    }
}

const celta = new Carro('ford', 'prata', 11);

console.log(celta.gastoViagem(70, 5));

