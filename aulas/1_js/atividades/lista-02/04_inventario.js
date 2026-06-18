/*
 * Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
 * no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }).
 * Use for...in para listar o inventário completo. Permita que o usuário
 * informe um item para usar: reduza a quantidade em 1 ou exiba "item esgotado"
 * se for zero.
 */

const inventory = {
  staff: 1,
  tome: 2,
  healPotions: 2,
  useItem(item) {
    if (this[item] === 0) {
      console.log(`----\nItem '${item}' used out.`);
      return
    } else if (!this[item]) {
      console.log(`----\nItem '${item}' not found.`);
      return;
    }
    this[item]--;
  },
  show() {
    console.log("----");
    console.log("Inventory:");
    const entries = Object.entries(this);
    for (const i in entries) {
      const [key, value] = entries[i];
      if (typeof value === "function") continue;
      console.log(`${key}: ${value}`);
    }
  }
};

inventory.show();
inventory.useItem("healPotions");
inventory.useItem("healPotions");
inventory.show();
inventory.useItem("healPotions");
