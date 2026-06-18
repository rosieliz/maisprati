/*
 * Ler três valores para os lados de um triângulo: A, B e C. Verificar se
 * os lados fornecidos formam realmente um triângulo. Caso forme,
 * deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
 * ● Para verificar se os lados fornecidos formam triângulo:
 *   A < B + C e B < A + C e C < A + B
 * ● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
 * ● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
 * ● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 */

import { readInputUntilValidNumber } from "./lib";

console.log("Vamos calcular um triângulo!!\n");
const a = readInputUntilValidNumber("Insira o lado A:");
const b = readInputUntilValidNumber("Insira o lado B:");
const c = readInputUntilValidNumber("Insira o lado C:");

const isValidTriangle = (a < b + c) && (b < a + c) && (c < a + b);
if (!isValidTriangle) {
  console.log("O triângulo informado não é válido.");
  process.exit();
}

let triangleType = "";
if (a === b && b === c ) {
  triangleType = "eqüilátero";
} else if (a === b || a === c || b === c) {
  triangleType = "isósceles";
} else if (a !== b && b !== c) {
  triangleType = "escaleno";
}

console.log("O triângulo é:", triangleType);
