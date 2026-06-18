/*
 * Suponha que você tem um array de objetos onde cada objeto representa
 * uma venda com vendedor e valor. Escreva uma função que retorne um objeto
 * que sumarize o total de vendas por vendedor.
 */

import { sum, zip } from "./lib"

function totalSalesFromVendor(vendor, prices) {
  return {
    ["Nomes"]: vendor,
    ["Total de compras"]: sum(prices),
  };
}

const purchases = [
  {
    name: "Vendedor A",
    price: 2759.02
  },
  {
    name: "Vendedor A",
    price: 518.97
  },
  {
    name: "Vendedor B",
    price: 2337.00
  },
  {
    name: "Vendedor A",
    price: 429.18
  },
  {
    name: "Vendedor B",
    price: 350.57
  },
];

const vendors = [...new Set(purchases.map(c => c.name))];
const prices = vendors.map(
  vendor => purchases.filter(purchase => purchase.name === vendor)
).map(g => g.map(p => p.price));
const dadosFinais = zip(vendors, prices).map(([v, p]) => totalSalesFromVendor(v, p));
console.table(dadosFinais);
