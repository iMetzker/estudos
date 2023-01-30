// AULA 57 - EXERCÍCIO COM NODELIST

const paragrafo = document.querySelector('.paragrafos');

// // SELECIONANDO UMA COLEÇÃO DE ELEMENTOS
const ps = paragrafo.querySelectorAll('p');

// ITERANDO SOBRE OS PARAGRAFOS (P)
// ADICIONANDO O BACKGROUND E UMA COR PARA O PARAGRAFO SELECIONADO. AO UTILIZAR STYLE PODEMOS INFORMAR QUALQUER PROPRIEDADE DENTRO DO CSS
for (const i of ps) {
console.log(i);
    i.style.backgroundColor = backgroundBody;
    i.style.color = "white";  
}

// // PEGANDO TUDO QUE FOI COMPUTADO PELO NAVEGADOR DO CSS, UTILIZANDO UMA FUNÇÃO
const estilos = getComputedStyle(document.body);

// // PEGANDO AGORA APENAS A COR DO BACKGROUND
const backgroundColosBody = estilos.backgroundColor;

