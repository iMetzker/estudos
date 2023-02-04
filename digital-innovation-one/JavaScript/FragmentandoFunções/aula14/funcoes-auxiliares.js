function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);

}

//Definindo um objeto com metodo gets e print (Exportando com module.exports)
module.exports = {gets, print};