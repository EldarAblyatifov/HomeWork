document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('myList');
  const listItems = list.querySelectorAll('li'); 

  if (listItems.length > 1) { 
    const lastItem = listItems[listItems.length - 1]; 

    const newListItem = document.createElement('li'); 
    newListItem.textContent = 'Элемент 2 (замененный)'; 

    list.replaceChild(newListItem, lastItem); 
  }
}); 