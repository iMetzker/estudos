/* mode */
const html = document.documentElement;
const btnMode = document.querySelector("#switch");

function toggleMode() {
  html.classList.toggle("light");
}

btnMode.addEventListener("click", () => {
  toggleMode();
  changeImg();
});

/* avatar */

function changeImg() {
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/img/avatar-lg.png');
    img.setAttribute('alt', 'foto de Ivny Metzker sorrindo, usando uma blusa branca, com fundo azul.');
  } else {
    img.setAttribute('src', './assets/img/avatar-dk.png');
    img.setAttribute('alt', 'foto de Ivny Metzker sorrindo, usando uma blusa branca e um óculos de sol preto, com fundo rosa.');
  }
}
