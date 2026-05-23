/*
 * Contagem de números pares: Usar o laço for  para contar quantos
 * números pares existem em um array de números.
 */

let numeros = [1, 5, 12, 89, 7, 724, 53, 4719];
let contagemPares = 0;

for (let n of numeros) {
    if (n % 2 === 0) {
        console.log(n);
        contagemPares++;
    }
}

console.log("\nTotal de números pares: ", contagemPares);
