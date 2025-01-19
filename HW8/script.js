// Задание 1


function sum(a, b = 5) {
  return a + b;
}
console.log(sum(7));
console.log('--------------');


// Задание 2


const numbers = [3, 7, 8, 15, 24];

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calculateSum(numbers));
console.log('--------------'); 

// Задание 3

const students = [
  { name: 'Max', age: 20, course: 3 },
  { name: 'Philipp', age: 60, course: 140 },
];

function displayStudentInfo(student) {
  console.log(`Имя: ${student.name}, Возраст: ${student.age}, Курс: ${student.course}`);
}

console.log(students[0]);

