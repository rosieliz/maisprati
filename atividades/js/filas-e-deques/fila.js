class Queue {
  constructor(list) {
    this.tasks = [];

    if (list.length === 0) {
      return;
    }

    for (const item of list) {
      this.tasks.push({
        label: "Imprimir " + item.name,
        pageCount: item.pageCount
      });
    }
  }

  print() {
    if (this.isEmpty()) {
       console.log("Nenhuma tarefa para imprimir. Cancelando impressão...");
       return;
    }

    console.log("Iniciando processo de impressão...");

    while (!this.isEmpty()) {
      const task = this.tasks[0];
      this.printTask(task);
      this.tasks.shift();
    }

    console.log("\nTarefas finalizadas. Fim da impressão.");
  }

  printTask(task) {
    console.log(`\nExecutando: "${task.label}"`);

    for (let i = 1; i <= task.pageCount; i++) {
      console.log(`Imprimindo página ${i}...`);
    }

    console.log("Páginas impressas com sucesso. Removendo tarefa da fila...");
  }

  isEmpty() {
    return this.tasks.length === 0;
  }
}

const documents = [
  {
    name: "Documento 1",
    pageCount: 5
  },
  {
    name: "Documento 2",
    pageCount: 2
  },
  {
    name: "Documento 3",
    pageCount: 2
  },
];

const queue = new Queue(documents);
queue.print();
