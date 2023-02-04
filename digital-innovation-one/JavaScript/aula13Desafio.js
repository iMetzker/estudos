// Percorrendo uma lista e imprimindo apenas os números pares

const numeros = [];
numeros.push (1);
numeros.push (2);
numeros.push (3);
numeros.push (4);
numeros.push (5);

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0){
        console.log(numero);
    }
    
}


