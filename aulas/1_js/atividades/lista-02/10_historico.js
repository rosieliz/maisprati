/*
 * Implemente uma pilha usando um array para simular o histórico de um
 * navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e
 * paginaAtual() (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes
 * e exiba a página atual a cada operação.
 */

class HistoryStack {
  #list = [];

  constructor(list) {
    this.#list = list ?? [];
  }

  visit(page) {
    return this.#list.push(page);
  }

  goBack() {
    return this.#list.pop();
  }

  currentPage() {
    return this.#list.at(-1);
  }
}


let history = new HistoryStack();

[ "Haskell"
, "Rust_(programming_language)"
, "Zig_(programming_language)"
, "NixOS"
].forEach(wiki => {
  const url = `https://en.wikipedia.org/${wiki}`;
  history.visit(url);
  console.log("Visiting:", url);
});

for (let i = 0; i < 2; i++) {
  history.goBack();
  console.log("Returning to:", history.currentPage());
}

console.log("\nCurrent page:", history.currentPage());
