// valores  - 2 5 1 6 1
// índices  - 0 1 2 3 4
// ponteiro - ^
let numeros = [2, 5, 1, 6, 1];

//numeros.entries().forEach(([ i, n ]) => console.log(i, n));

// numeros.forEach(function(numero) {
//     console.log(numero);
// });

for (let pos in numeros) {
    console.log(numeros[pos]);
}
