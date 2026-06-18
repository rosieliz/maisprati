/*
 * Crie um programa que classifica a idade de uma pessoa em categorias (criança,
 * adolescente, adulto, idoso) com base no valor fornecido, utilizando uma
 * estrutura de controle if-else.
 */

import { readInputUntilValidNumber } from "./lib";

const age = readInputUntilValidNumber("Informe a sua idade:");

let ageClass = "";
if (age <= 10) {
  ageClass = "criança";
} else if (age <= 18) {
  ageClass = "adolescente";
} else if (age <= 40) {
  ageClass = "adulto";
} else {
  ageClass = "idoso";
}

console.log("Sua classe é:", ageClass);
