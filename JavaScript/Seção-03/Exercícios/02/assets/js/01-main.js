// AULA 48 - EXIBINDO A DATA ATUAL NO NAVEGADOR

const h1 = document.querySelector(".container h1");
const data = new Date();

function dayWeekText(dayWeek) {
  const day = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'];
  return day[dayWeek];
}

function month(numberMonth) {
  const month = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro','outubro', 'novembro', 'dezembro'];
  return month[numberMonth];
}

function zeroTheLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function createData(data) {
  const day = data.getDay();
  const nameDay = dayWeekText(day);

  const monthNumber = data.getMonth();
  const nameMonth = month(monthNumber);

  const dayWeek = data.getDate();
  const year = data.getFullYear();
  const hour = zeroTheLeft(data.getHours());
  const minutes = zeroTheLeft(data.getMinutes());

  return `${nameDay}, ${dayWeek} de ${nameMonth} de ${year} às ${hour}:${minutes}`;
}

h1.innerHTML = createData(data);