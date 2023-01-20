// FUNÇÕES, ARRAYS E OBJETOS

// SELECIONANDO  UM ELEMENTO HTML COMO QUERYSELECTOR QUE É MAIS MODERNO, A FORMA DE CHAMAR O ELEMENTO É IGUAL AO CSS (ID = #FORM, CLASS = .FORM, ...)

// CAPTURANDO UM EVENTO DO NAVEGADOR (addEventListener ('submit)), NESTE CASO VAMOS BARRAR O SUBMIT (preventDefault)


function meuEscopo() {
    const formulario = document.querySelector('.form');
    const resultados = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultados.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    formulario.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
