const items = [
  { name: "MSI GeForce RTX 5080 Gaming Trio OC", price: 1899 },
  { name: "SONY PlayStation 5 Pro", price: 784 },
  { name: "ASUS 47,5 Zoll OLED 4K Gaming Monitor", price: 2070 }
];

function proverka50(items) {
  return items.some(item => item.price > 50);
}

const result = proverka50(items);
console.log(result); 


// ----------------------------------------------------------------
console.log("--------"); 
// ----------------------------------------------------------------



const items2 = [
  { name: "Оливковое масло", price: 18.50 },
  { name: "Большая банка Нутеллы", price: 6 }
];

function proverka502(items2) {
  return items2.some(item => item.price > 50);
}


const result2 = proverka502(items2);
console.log(result2); 