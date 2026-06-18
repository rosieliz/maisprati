/*
 * Crie um programa que calcula o fatorial de um número
 * fornecido pelo usuário utilizando um loop for ou while.
 */

import { readInputUntilValidNumber } from "./lib";

const number = readInputUntilValidNumber("Insira um número:");

let result = 1;
let pivot = number;
while (pivot > 0) {
  result *= pivot--;
}

console.log("O resultado é:", result);
