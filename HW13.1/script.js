const text = document.getElementById('text');
const button = document.getElementById('button');
const result = document.getElementById('result');

const STORAGE_KEY = 'lastNote';


document.addEventListener('DOMContentLoaded', () => {
  const lastNote = localStorage.getItem(STORAGE_KEY);
  if (lastNote) {
    result.textContent = lastNote;
  }
});


button.addEventListener('click', () => {
  const note = text.value;
  localStorage.setItem(STORAGE_KEY, note);
  result.textContent = note;


  setTimeout(() => {
    text.value = '';
  }, 3000);
});