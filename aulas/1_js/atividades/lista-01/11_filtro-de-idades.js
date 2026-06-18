/*
 * Crie um programa que leia o nome e a idade de 9 pessoas
 * e guarde esses valores em dois vetores, em posições relacionadas.
 * No final, mostre uma listagem contendo apenas os dados das
 * pessoas menores de idade.
 */

import { readInputUntilValidNumber, zip } from "./lib";

const len = 9;
let names = new Array(len);
let ages = new Array(len);

for (let i = 0; i < len; i++) {
  console.log(`Insira os dados da pessoa ${i+1}:`)
  const name = prompt("Nome  >")
  const age  = readInputUntilValidNumber("Idade >")
  names[i] = name;
  ages[i] = age;
  console.log("---")
}

const filtered = zip(names, ages).filter(([_, age]) => age >= 18);
console.log("Maiores de idade:");
for (const [name, age] of filtered) {
  console.log(`Nome: ${name}\nIdade: ${age}\n---`);
}
