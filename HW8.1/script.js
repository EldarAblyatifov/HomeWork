// Задание 1

function multiplyArrayElements(array) {
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }

  return product;
}

const numbers = [1, 3, 10, 5];
const result = multiplyArrayElements(numbers);
console.log(result);


// Задание 2

const numbers1 = [1, 2, 3, 4, 5];

let i = 0;
let sum = 0;

while (i < numbers1.length) {
  sum += numbers1[i];
  i++;
}

console.log(sum);