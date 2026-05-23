/*
 * Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor.
 * No final, mostre uma listagem com todos os nomes informados,
 * na ordem inversa daquela em que eles foram informados.
 */

let names = new Array(7);

console.log("Insira sete nomes:")
for (let i = 0; i < names.length; i++) {
  const name = prompt(">");
  names[i] = name;
}

const reversed = names.reverse();
console.log("Os nomes informados em ordem reversa são:")
reversed.forEach(name => console.log(name));
