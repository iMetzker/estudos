// MELHORANDO O CÓDIGO PARA EXECUTAR A MESMA AÇÃO

const h1 = document.querySelector(".container h1");
const data = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

h1.innerHTML = data.toLocaleDateString("pt-BR", options);
