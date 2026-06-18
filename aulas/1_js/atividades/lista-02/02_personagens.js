/*
 * Crie dois objetos representando personagens de um jogo, cada um com as
 * propriedades: nome, vida, ataque e defesa. Use for...in para exibir
 * os atributos de cada personagem lado a lado e determine qual deles tem maior
 * poder total (soma de vida + ataque + defesa).
 */

// personagens dos jogos "Golden Sun" e "Golden Sun: The Lost Age", recomendo :)
const characters = [
  {
    name: "Isaac",
    health: 571,
    atk: 387,
    def: 217
  },
  {
    name: "Felix",
    health: 673,
    atk: 516,
    def: 280
  }
];

const stats = Object.keys(characters[0]);
const statValues = characters.map(c => Object.values(c));

console.log("Characters:");
for (const i in stats) {
  let line = "";
  line += stats[i].toUpperCase().padEnd(10);
  for (const j in statValues) {
    line += String(statValues[j][i]).padEnd(8);
  }
  console.log(line);
}

let totalPower = {};
characters.forEach(c => {
  const characterValues = Object.values(c);
  const power = characterValues.slice(1).reduce((acc, cur) => acc + cur);
  if (!totalPower.power || power > totalPower.power) {
    totalPower = {
        name: characterValues[0],
        power: power
    }
  }
});
console.log("\nHighest power: %s, %d", totalPower.name, totalPower.power);
