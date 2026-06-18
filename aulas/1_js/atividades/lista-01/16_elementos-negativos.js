/*
 * Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição,
 * a quantidade de elementos negativos da linha correspondente de M.
 */

const M = [
  [  2, -1,  -6, -4, -7, -5,  -1,  -5],
  [  3, -4,   6,  7,  9, -4, -10,   0],
  [-10,  1, -10, -4,  7, -9,   5,   8],
  [  9,  2,  -7,  3,  9, 10,   8,  10],
  [ 10, -7,  -2,  6,  2,  3,   3, -10],
  [ -1,  4,  -4,  5, -7,  4,  -9,  -3]
];

let C = M.map(l => l.filter(n => n < 0).length);
for (let i = 0; i < C.length; i++) {
  console.log(`Negativos na linha ${i+1}: ${C[i]}`);
}
