/*
 * Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 * "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
 */

import { readInputUntilValidNumber } from "./lib";

const grade = readInputUntilValidNumber("Informe sua nota:");
if (grade < 0 || grade > 10) {
  console.error("A nota deve ser de 0 a 10.");
  process.exit();
}

let message = "Você está: ";
if (grade >= 7) {
  message += "Aprovado";
} else if (grade >= 4) {
  message += "Recuperação";
} else {
  message += "Reprovado";
}
console.log(message);
