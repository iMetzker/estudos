function informarMaiorIdade (idade){
    if (idade >= 18){
        return 'Maior de Idade'
    }
    else if (idade < 18){
        return 'Menor de Idade'
    }
    else {
        return 'Digite uma idade válida'
    }
}

console.log( informarMaiorIdade(15) );