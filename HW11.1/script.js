const button = document.getElementById('myButton');
const counterDiv = document.getElementById('clickCounter');
const congratulationsDiv = document.getElementById('congratulations');

let clickCount = 0;

button.addEventListener('click', () => {
  clickCount++;
  counterDiv.textContent = clickCount;

  if (clickCount % 5 === 0) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    counterDiv.style.backgroundColor = randomColor;
  } else {
    counterDiv.style.backgroundColor = 'lightblue';
  }

  if (clickCount === 10) {
    congratulationsDiv.textContent = 'Поздравляем! Вы достигли 10 кликов!';
    congratulationsDiv.style.display = 'block';
  }
});