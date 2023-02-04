class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc (){
        return this.peso / Math.pow(this.altura,2);
    }

    classificarImc (){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Você está abaixo do peso, procure um profissional. Seu IMC é: ' + imc.toFixed(1);
        }
        else if (imc >= 18.5 && imc < 25) {
            return 'Parabéns! Você está no seu peso ideal. Seu IMC é: ' + imc.toFixed(1);
        }
        else if (imc >= 25 && imc < 30) {
            return 'Você está acima do peso, procuse um profissional. Seu IMC é: ' + imc.toFixed(1);
        }
        else if (imc >= 30 && imc < 40) {
            return 'Você está obeso, procuse um profissional. Seu IMC é: ' + imc.toFixed(1);
        }
        else {
            return 'Você está com Obesidade Grave, procuse um profissional. Seu IMC é: ' + imc.toFixed(1);
        }
    }
}

const ivny = new Pessoa ('Ivny', 71, 1.74);
console.log(ivny.classificarImc());
console.log(ivny);
