/*
 * Crie um objeto representando um produto com as propriedades: nome, preço,
 * categoria e quantidade em estoque. Use for...in para percorrer e exibir
 * todas as propriedades e seus valores. Em seguida, adicione uma nova
 * propriedade desconto ao objeto e exiba o preço final calculado.
 */

let product = {
  name: "Rust Book",
  price: 48.90,
  category: "computer programming",
  stockQty: 500
};

const entries = Object.entries(product);

for (const i in entries) {
  const [key, value] = entries[i];
  console.log(`${key}: ${value}`);
}

product.discount = 20;

console.log(`\nCurrent price: ${product.price - product.discount}`);
