// Задание 1

let grade = 55;



if (grade >= 90) {
  console.log("Ваша оценка: A")

} else if (grade >= 80) {
  console.log("Ваша оценка: B")

} else if (grade >= 70) {
  console.log("Ваша оценка: C")

} else if (grade >= 60) {
  console.log("Ваша оценка: D")

} else {
  console.log("Ваша оценка: F");
}

// Задание 2


let dayOfWeek = 6;

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