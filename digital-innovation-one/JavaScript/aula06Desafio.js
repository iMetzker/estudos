function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);

}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Você está abaixo do peso, procure um profissional.';
    }
    else if (imc >= 18.5 && imc < 25) {
        return 'Parabéns! Você está no seu peso ideal.';
    }
    else if (imc >= 25 && imc < 30) {
        return 'Você está acima do peso, procuse um profissional.';
    }
    else if (imc >= 30 && imc < 40) {
        return 'Você está obeso, procuse um profissional.';
    }
    else {
        return 'Você está com Obesidade Grave, procuse um profissional.';
    }
}

function main() {
    const peso = 71;
    const altura = 1.74;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();






