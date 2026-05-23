class Pilha {
  constructor(lista) {
    this.itens = lista ?? [];
  }

  push(item) {
    return this.itens.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return [];
    }
    return this.itens.pop();
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  print() {
    console.log("\n======");
    this.itens.map((item, indice) => {
      console.log(`${indice}: ${item}`);
    })
  }
}

const pilha = new Pilha();
pilha.push("A");
pilha.print();
pilha.pop();
pilha.push("B");
pilha.print();
