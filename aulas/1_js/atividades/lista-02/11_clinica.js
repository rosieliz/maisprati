/*
 * Implemente uma fila usando um array para simular o atendimento de uma
 * clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
 * (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e
 * o atendimento de 3, exibindo o estado da fila a cada operação.
 */

class ClinicQueue {
  #patients = []

  constructor(list) {
    this.#patients = list ?? [];
  }

  receivePatient(name) {
    return this.#patients.push(name);
  }

  callNextPatient() {
    return this.#patients.shift();
  }

  displayQueue() {
    console.log("Patients:\n", this.#patients.join(" ‹ "));
  }
}


let queue = new ClinicQueue();

[ "James"
, "Michael"
, "Mary"
, "David"
, "Susan"
].forEach(patient => {
  queue.receivePatient(patient);
  queue.displayQueue();
});

console.log();
for (let i = 0; i < 2; i++) {
  queue.callNextPatient();
  queue.displayQueue();
}
