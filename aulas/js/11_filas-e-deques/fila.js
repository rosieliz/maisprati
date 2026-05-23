class Queue {
  constructor(list) {
    this.items = list ?? [];
  }

  push(item) {
    return this.items.push(item);
  }

  shift() {
    return this.items.shift();
  }

  print() {
    console.log(this.items.join(" <- "));
  }
}

const queue = new Queue([1, 2, 3]);
queue.print();
