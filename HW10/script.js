// Задание 1
const block = document.querySelector('.block');
const initialColor = block.style.backgroundColor;

block.addEventListener('mouseover', () => {
  block.style.backgroundColor = 'red';
});

block.addEventListener('mouseout', () => {
  block.style.backgroundColor = initialColor;
});


// Задание 2
const colorButton = document.getElementById('colorButton');
const colorBlock = document.getElementById('colorBlock');

colorButton.addEventListener('click', () => {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  colorBlock.style.backgroundColor = randomColor;
});