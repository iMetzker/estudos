let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];
let valor = 137;


function isBuscaSequencial() {
    for (let i = 0; i < elementos.length; i++) {

        if (valor === elementos[i]) {
            return `Achei ${valor} na posicao ${i}`;
        }
    }

    return `Numero ${valor} nao encontrado!`;
}

console.log(isBuscaSequencial());

