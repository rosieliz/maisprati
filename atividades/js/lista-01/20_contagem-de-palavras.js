/*
 * Dado um array de strings, crie um objeto onde cada string é uma chave,
 * e seu valor é o número de vezes que a string aparece no array.
 */

const words =
`Eu me chamo Pisca-pisca
Nasci assim desse jeito
Eu pisco com o olho esquerdo
Também pisco com o direito

Mas também sou cantador
Dizem que sou bom de peito
Na cantiga me garanto
Quando eu abro o peito e canto
Ninguém nota o meu defeito

Pisca-pisca, Pisca-pisca
O velho me fez assim
E a velha 'tava piscando
Quando deu vida pra mim`.split(/[\s',]+/g);

let wordCount = {};
for (const word of words) {
  const lowercase = word.toLowerCase();
  if (Object.keys(words).includes(lowercase)) continue;
  wordCount[lowercase] = words.filter(s => s === word).length;
}

console.table(wordCount);
