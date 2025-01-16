// Задание 1

const person = {
  name: "Eldar",
  age: 32
};

console.log("Имя:", person.name);
console.log("Возраст:", person.age);
console.log("----------------");


// Задание 2

const books = [
  { title: "Цветы для Элджерона", autor: "Дэниел Киз" },
  { title: "Мартин Идэн", autor: "Джека Лондон" },
  { title: "1984", autor: "Джордж Оруэлл" }
];


for (let i = 0; i < books.length; i++) {
  console.log("Название:", books[i].title);
  console.log("Автор:", books[i].autor);
  console.log("----------------");
}