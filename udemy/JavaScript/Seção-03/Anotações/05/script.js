// AULA 47 - SWITCH / CASE

const data = new Date("2023-01-01 00:00:00");
let diaSemana = data.getDay();

let diaDaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaDaSemanaTexto = "Domingo";
    break;
  case 1:
    diaDaSemanaTexto = "Segunda";
    break;
  case 2:
    diaDaSemanaTexto = "Terça";
    break;
  case 3:
    diaDaSemanaTexto = "Quarta";
    break;
  case 4:
    diaDaSemanaTexto = "Quinta";
    break;
  case 5:
    diaDaSemanaTexto = "Sexta";
    break;
  case 6:
    diaDaSemanaTexto = "Sábado";
    break;
  default:
    diaDaSemanaTexto = "Inválido";
}

console.log(diaSemana, diaDaSemanaTexto);
