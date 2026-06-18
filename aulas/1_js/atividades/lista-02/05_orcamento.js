/*
 * Crie um objeto representando o orçamento mensal de uma pessoa, com
 * categorias como alimentação, transporte, lazer e saúde, cada uma com valor
 * planejado e valor gasto. Use for...in para percorrer as categorias e exibir
 * se cada uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.
 */

const budget = {
  food: {
    planned: 350,
    spent: 280
  },
  water: {
    planned: 80,
    spent: 70
  },
  electricity: {
    planned: 100,
    spent: 105
  },
};

let total = 0;

const entries = Object.entries(budget);

console.log("NAME           PLANNED    SPENT");
for (const i in entries) {
  const [ entry, values ] = entries[i];
  const planned = String(values.planned).padEnd(7);
  const spent = String(values.spent).padEnd(5);
  let line = `${entry.padEnd(14)} ${planned}    ${spent}`

  // marca contas com ^ quando passam do orçamento
  if (spent > planned) {
    line += " ^";
  }

  console.log(line);
  total += values.spent;
}

console.log("\nTotal spent: $", total);
