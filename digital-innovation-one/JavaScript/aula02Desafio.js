
// Declaração de variáveis

const etanol = 3.80;
const gasolina = 5.79;
const combustivel = 'etanol';
const kmlt = 17;
const km = 400;


// Realizando uma condicional para cálculo do valor gasto de combustível com etanol ou gasolina

if (combustivel === 'etanol') {
    const valorviagem = (km / kmlt) * etanol;
    console.log('O valor do etanol gasto na viagem será de: R$ ', valorviagem.toFixed(2));
}
else if (combustivel === 'gasolina') {
    const valorviagem = (km / kmlt) * gasolina;
    console.log('O valor da gasolina gasta na viagem será de: R$ ', valorviagem.toFixed(2));
}
else {
    console.log('Digite uma entrada válida');
}

 



