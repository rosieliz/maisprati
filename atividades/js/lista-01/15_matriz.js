/*
 * Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos
 * da diagonal principal são iguais a 1 e os demais são nulos.
 */

const len = 7;
let MI = new Array(len);

for (let i = 0; i < MI.length; i++) {
  let item = new Array(len).fill(null);
  item[i] = 1;
  MI[i] = item;
}

MI.forEach(list => console.log(list.join(" ")));
