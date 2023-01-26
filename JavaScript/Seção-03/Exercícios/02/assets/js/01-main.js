// AULA 48 - EXIBINDO A DATA ATUAL NO NAVEGADOR

const h1 = document.querySelector('.container h1');
const data = new Date();

function dayWeekText (dayWeek) {
    let textDay;

    switch(dayWeek) {
        case 0:
        textDay = "domingo";
        return textDay;
        case 1:
        textDay = "segunda-feira";
        return textDay;
        case 2:
        textDay = "terça-feira";
        return textDay;
        case 3:
        textDay = "quarta-feira";
        return textDay;
        case 4:
        textDay = "quinta-feira";
        return textDay;
        case 5:
        textDay = "sexta-feira";
        return textDay;
        case 6:
        textDay = "sábado";
        return textDay;
        default :
        textDay = "Inválido";
        return textDay;
    }
}

function month (numberMonth) {
    let textMonth;

    switch(numberMonth) {
        case 0:
        textMonth = "janeiro";
        return textMonth;
        case 1:
        textMonth = "fevereiro";
        return textMonth;
        case 2:
        textMonth = "março";
        return textMonth;
        case 3:
        textMonth = "abril";
        return textMonth;
        case 4:
        textMonth = "maio";
        return textMonth;
        case 5:
        textMonth = "junho";
        return textMonth;
        case 6:
        textMonth = "julho";
        return textMonth;
        case 7:
        textMonth = "agosto";
        return textMonth;
        case 8:
        textMonth = "setembro";
        return textMonth;
        case 9:
        textMonth = "outubro";
        return textMonth;
        case 10:
        textMonth = "novembro";
        return textMonth;
        case 11:
        textMonth = "dezembro";
        return textMonth;
    }
}

function zeroTheLeft (num) {
    return num >= 10 ? num : `0${num}`;
}

function createData (data) {
    const day = data.getDay();
    const nameDay = dayWeekText (day);

    const monthNumber = data.getMonth();
    const nameMonth = month(monthNumber);

    const dayWeek = data.getDate();
    const year = data.getFullYear();
    const hour = zeroTheLeft(data.getHours());
    const minutes = zeroTheLeft(data.getMinutes());

    return `${nameDay}, ${dayWeek} de ${nameMonth} de ${year} às ${hour}:${minutes}`;

}

h1.innerHTML = createData(data);