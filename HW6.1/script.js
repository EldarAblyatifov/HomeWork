// Задание 1


let firstName = 'Eldar';
let lastName = 'Ablyatifov';

let greeting = "Привет, " + firstName + " " + lastName + "!";

console.log(greeting);


// Задание 2


let month = 4;

let season;

if (month >= 3 && month <= 5) {
  season = "весна";
}
  else if (month >= 6 && month <= 8) {
  season = "лето";
}
  else if (month >= 9 && month <= 11) {
  season = "осень";
}
  else {
  season = "зима";
}

console.log("Текущий сезон:", season);


// Задание 3



let sentencePart1 = "Я люблю";
let sentencePart2 = "программирование";

let completeSentence = sentencePart1 + " " + sentencePart2;

console.log(completeSentence);


// Задание 4


let dayOfWeek = 7;

let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Понедельник";
    break;
  case 2:
    dayName = "Вторник";
    break;
  case 3:
    dayName = "Среда";
    break;
  case 4:
    dayName = "Четверг";
    break;
  case 5:
    dayName = "Пятница";
    break;
  case 6:
    dayName = "Суббота";
    break;
  case 7:
    dayName = "Воскресенье";
    break;
  default:
    dayName = "Еще не придумали дни недели";
}

console.log("Сегодня:", dayName);