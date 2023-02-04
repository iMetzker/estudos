// Cálculo do IMC

const peso = 71.3;
const altura = 1.74;

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log('Você está abaixo do peso, procure um profissional. Seu IMC é: ', imc.toFixed(1));
}
else if (imc >= 18.5 && imc < 25) {
    console.log('Parabéns! Você está no seu peso ideal. Seu IMC é: ', imc.toFixed(1));
}
else if (imc >= 25 && imc < 30) {
    console.log('Você está acima do peso, procuse um profissional. Seu IMC é: ', imc.toFixed(1));
}
else if (imc >= 30 && imc < 40) {
    console.log('Você está obeso, procuse um profissional. Seu IMC é: ', imc.toFixed(1));
}
else {
    console.log('Você está com Obesidade Grave, procuse um profissional. Seu IMC é: ', imc.toFixed(1));
}