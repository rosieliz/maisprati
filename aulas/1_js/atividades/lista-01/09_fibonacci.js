/*
 * Escreva um programa que gera e imprime os primeiros 10 números
 * da sequência de Fibonacci utilizando um loop for.
 */

let first = 1;
let second = 0;

let line = "Os primeros 10 dígitos da sequência de Fibonacci são:";
for (let i = 0; i < 5; i++) {
  first = second + first;
  second = first + second;
  line += ` ${first} ${second}`;
}
console.log(line);
