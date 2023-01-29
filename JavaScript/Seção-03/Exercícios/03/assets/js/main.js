// AULA 53 - EXERCÍCIO COM FOR (APENAS IMPRIMINDO ALGO NA TELA, CRIANDO OS ELEMENTOS DENTRO DO ARRAY)

const elementos = [
  { tag: "div", texto: "Frase 1" },
  { tag: "p", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" }
];

const content = document.querySelector(".container");

// CRIANDO UMA DIV
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i]; // PERCORRENDO O ARRAY EM CADA OBJETO PELO ÍNDICE
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}
content.appendChild(div);
