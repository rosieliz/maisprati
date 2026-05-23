/*
 * Fazer um algoritmo para receber números decimais até que o usuário
 * digite 0 e fazer a média aritmética desses números.
 */

import { average, readInputUntilValidNumber } from "./lib";

let numbers = [];

console.log("Insira uma série de números.\nInsira 0 para encerrar.");
do {
  const number = readInputUntilValidNumber(">");
  if (number === 0) break;
  numbers.push(number);
} while (true)

const avg = average(numbers);
console.log("A média dos números é:", avg);
