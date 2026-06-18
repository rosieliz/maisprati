/*
 * Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
 * funções adicionar(tarefa), remover(tarefa) e exibir() que percorre
 * todos os nós. Simule um gerenciador de tarefas: adicione 4 tarefas,
 * remova uma pelo nome e exiba a lista antes e depois.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class TaskManagerLinkedList {
  constructor(task) {
    this.head = new Node(task) ?? null;
  }

  add(task) {
    let newTask = new Node(task);
    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newTask;
  }

  remove(task) {
    let temp = this.head;

    while (temp.next !== null) {
      if (temp.next.data === task) {
        temp.next = temp.next.next;
        return;
      }
      temp = temp.next;
    }

    console.log("Task not found.");
  }

  display() {
    let msg = this.head.data;
    let temp = this.head?.next ?? this.head;

    while (temp !== null) {
      msg += ` -> ${temp.data}`;
      temp = temp.next;
    }
    console.log(msg);
  }
}


let taskManager = new TaskManagerLinkedList("swaywm");

[ "alacritty"
, "librewolf"
, "helix"
, "zls"
].forEach(task => {
  taskManager.add(task);
  taskManager.display();
});

taskManager.remove("librewolf");

console.log("\nResult:");
taskManager.display();
