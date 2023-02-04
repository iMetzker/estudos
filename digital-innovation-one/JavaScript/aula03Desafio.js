const nota01 = 8;
const nota02 = 9;
const nota03 = 7;
const media = (nota01 + nota02 + nota03) / 3;


if (media > 7) {
    console.log('Parabéns! Você está APROVADO! Sua média foi: ', media.toFixed(1));
}
else if (media >= 5 && media <= 7) {
    console.log('Por pouco! Você está de RECUPERAÇÃO. Sua média foi: ', media.toFixed(1));
}
else {
    console.log('Precisa se esforçar mais! Você foi REPROVADO. Sua média foi: ', media.toFixed(1));
}