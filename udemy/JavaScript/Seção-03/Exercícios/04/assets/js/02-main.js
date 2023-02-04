// EXERCÍCIO - MUDANDO O BACKGROUND DOS ELEMENTOS P

const paragrafo = document.querySelector('.paragrafos');
const ps = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;


for (const i of ps) {
    i.style.backgroundColor = backgroundBody;
    i.style.color = "white";
}

