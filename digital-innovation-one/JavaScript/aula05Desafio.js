const produto = 100;
const pagamento = 'debito';
let receber = 0;

if (pagamento === 'debito') {
    receber = produto - (produto * 0.1);
    console.log('O valor a ser pago no débito é de R$ ', receber);
}
else if (pagamento === 'dinheiro' | 'pix') {
    receber = produto - (produto * 0.15);
    console.log('O valor a ser pago no dinheiro ou por PIX é de R$ ', receber);
}
else if (pagamento === 'dividir2x') {
    console.log('O valor total a ser pago dividindo em 2x é de R$ ', produto);
}
else if (pagamento === 'dividir2+') {
    receber = produto + (produto * 0.1);
    console.log('O valor total a ser pago dividindo em mais de 2x é de R$ ', receber);
}
else {
    console.log('Insira uma forma de pagamento válida');
}