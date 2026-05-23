/*
 * A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes,
 * coletando dados sobre salário e número de filhos. Faça uma função
 * que leia esses dados para um número não determinado de pessoas e retorne
 * a média de salário da população, a média do número de filhos, o maior salário
 * e o percentual de pessoas com salário até R$350,00.
 */

import { average, random, unzip } from "./lib";

function showCityStatistics(population) {
  let people = [];

  for (let i = 0; i < population; i++) {
    const salary = random(0, 6000, true, true);
    const childrenCount = random(0, 3, true);
    people.push({
      salary: parseFloat(salary.toFixed(2)),
      childrenCount,
    });
  }

  const temp = people.map(p => [p.salary, p.childrenCount]);
  const [salaries, children] = unzip(temp);

  const averageChildCount = average(children).toFixed(2);
  const averageSalary = average(salaries).toFixed(2);
  const highestSalary = Math.max(...salaries).toFixed(2);
  const salariesAboveDelimiter = salaries.filter(s => s > 350).length;

  console.log(`Estatísticas de uma cidade de ${population} habitantes:`);
  console.table({
    ["Média de filhos"]: averageChildCount,
    ["Média salarial"]: averageSalary,
    ["Maior salário"]: highestSalary,
    ["Salários acima de R$350,00"]: salariesAboveDelimiter
  });
}

const population = random(1, 150000);
showCityStatistics(population);
