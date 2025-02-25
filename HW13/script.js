const items = [
  { name: "MSI GeForce RTX 5080 Gaming Trio OC", price: 1899 },
  { name: "SONY PlayStation 5 Pro", price: 784 },
  { name: "ASUS 47,5 Zoll OLED 4K Gaming Monitor", price: 2070 }
];

function hasExpensiveItem(items) {
  return items.some(item => item.price > 50);
}

const result = hasExpensiveItem(items);
console.log(result); 


// ----------------------------------------------------------------
console.log("--------"); 
// ----------------------------------------------------------------



const items2 = [
  { name: "Оливковое масло", price: 18.50 },
  { name: "Большая банка Нутеллы", price: 6 }
];

function hasExpensiveItem2(items2) {
  return items2.some(item => item.price > 50);
}


const result2 = hasExpensiveItem2(items2);
console.log(result2); 