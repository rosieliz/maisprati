/*
 * Crie um array de objetos representando produtos com nome, preço e quantidade.
 * Use forEach para calcular o valor total em estoque de cada produto
 * (preço × quantidade) e exibir um relatório.
 * Ao final, exiba o valor total geral de todo o estoque.
 */

const products = [
  {
    name: "Flour",
    price: 14.90,
    quantity: 30
  },
  {
    name: "Rice",
    price: 8.50,
    quantity: 10
  },
  {
    name: "Cookies",
    price: 7.90,
    quantity: 25
  },
  {
    name: "Milk",
    price: 4.50,
    quantity: 50
  }
];

console.log("Stock values:\n");

let stockValues = [];
products.forEach(({ name, price, quantity }) => {
  const stockValue = price * quantity;
  console.log(`${name}: ${stockValue}`);
  stockValues.push(stockValue);
});

const totalStockValue = stockValues.reduce((acc, cur) => acc + cur);
console.log(`---\nTotal stock value: ${totalStockValue}`);
