/*
 * Faça uma função que recebe, por parâmetro, a altura (alt)
 * e o sexo de uma pessoa e retorna o seu peso ideal. Para homens,
 * calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e,
 * para mulheres, peso ideal = 62.1 x alt - 44.7.
 */

import { readInputUntilValidNumber } from "./lib";

function calculateIdealWeight(height, sex) {
  let idealWeight = 0;
  switch (sex.trim().toLowerCase()) {
    case 'm':
      idealWeight = 72.7 * height - 58;
      break;
    case 'f':
      idealWeight = 62.1 * height - 44.7;
      break;
    default:
      console.error("Opção inválida.");
      process.exit();
  }

  return idealWeight.toFixed(2);
}

const height = readInputUntilValidNumber("Informe a sua altura (m):");
const sex = prompt("Informe o seu sexo [m/f]:");
const idealWeight = calculateIdealWeight(height, sex);
console.log("Seu peso ideal é:", idealWeight);
