class Deck {
  constructor(list) {
    this.items = list ?? [];
  }

  addFront(el) {
    return this.items.push(el);
  }

  addBack(el) {
    return this.items.unshift(el);
  }

  removeFront() {
    return this.items.pop();
  }

  removeBack() {
    return this.items.shift();
  }

  peekFront() {
    return this.items.at(-1);
  }

  peekBack() {
    return this.items[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }
}

const deck = new Deck([1, 2, 3]);

deck.addBack(0);
deck.addFront(4);
console.log("Deque com novos itens:", deck.items);

deck.removeBack();
deck.removeFront();
console.log("Deque após remoções:", deck.items);

console.log("Primeiro item:", deck.peekBack());
console.log("Último item:", deck.peekFront());
console.log("Está vazio?", deck.isEmpty());
console.log("Comprimento:", deck.size());
