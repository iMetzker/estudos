function pagamento (valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function pagamentoJuros (valor, juros){
    return (valor + (valor * (juros / 100)));
}

const valorProduto = 100;
const formaDePagamento = 4;


if (formaDePagamento === 1) {
    console.log('O valor a ser pago é ' + pagamento(valorProduto,10));
}
else if (formaDePagamento === 2) {
    console.log('O valor a ser pago é ' + pagamento(valorProduto,15));
}
else if (formaDePagamento === 3) {
    console.log('O valor a ser pago é ' + valorProduto);
}
else if (formaDePagamento === 4) {
    console.log('O valor a ser pago é ' + pagamentoJuros(valorProduto,10));
}
else {
    console.log('Insira uma forma de pagamento válida');
}