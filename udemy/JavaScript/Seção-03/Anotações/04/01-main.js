// AULTA 46 - OBJETO DATE

const data = new Date('2019-04-20 20:20:59.100'); // FORMATO MAIS UTILIZADO
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // NO JS COMEÇA NO 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milissegundo', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 É DOMINGO E 6 É SÁBADO

console.log(data.toString());

// PEGANDO A DATA ATUAL EM MSG À PARTIR DO ANO 1970
console.log(Date.now());