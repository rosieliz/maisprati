/*
 * Escreva um programa que recebe um número inteiro e verifica se ele é par ou
 * ímpar utilizando uma estrutura de controle if.
 */

import { readInputUntilValidNumber } from "./lib";

let number = readInputUntilValidNumber("Insira um número:");
let message = `O número ${number} é `;

if (number % 2 === 0) {
  message += "par";
} else {
  message += "ímpar";
}
console.log(message + '.');
