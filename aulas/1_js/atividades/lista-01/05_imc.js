/*
 * Escreva um programa que calcula o Índice de Massa Corporal (IMC)
 * de uma pessoa e determina a categoria de peso
 * (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
 */

import { readInputUntilValidNumber } from "./lib";

const height = readInputUntilValidNumber("Insira sua altura (m):")
const weight = readInputUntilValidNumber("Insira o seu peso (kg):");
const imc = weight / (height ** 2);

// Fonte: https://www.calculoimc.com/
let message = "Sua categoria de peso é: ";
if (imc < 18.5) {
  message += "baixo peso";
} else if (imc < 25) {
  message += "peso normal";
} else if (imc < 30) {
  message += "sobrepeso";
} else {
  message += "obeso";
}

console.log(message);
