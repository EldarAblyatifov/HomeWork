// Заданеи 1

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Заданеи 2

const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 8 && arr[i] < 20) {
    console.log(arr[i]);
  }
}


// Заданеи 3


const random = [10, 5, 8, 2, 15];
let min = random[0];

for (let i = 1; i < random.length; i++) {
  if (random[i] < min) {
    min = random[i];
  }
}

console.log("Минимальное значение:", min);


// Заданеи 4


const massnumbers = [1, 2, 3, 10, 5];
const indexToUpdate = 3;
const newValue = 4;

massnumbers[indexToUpdate] = newValue;
console.log(massnumbers);


// Заданеи 5

const words = ["apple", "banana", "orange", "grapefruit"];
let longestWord = words[0];

for (let i = 1; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}

console.log("Самое длинное слово:", longestWord);