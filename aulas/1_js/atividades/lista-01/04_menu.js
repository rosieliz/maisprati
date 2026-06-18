/*
 * Crie um menu interativo no console que oferece ao usuário a escolha de
 * três opções.
 * Utilize switch-case para implementar a lógica de cada opção selecionada.
 */

import { readInputUntilValidNumber, randomNumber } from "./lib";

async function fetchCatFact() {
  return await fetch("https://catfact.ninja/fact")
    .then(async (res) => await res.json())
    .then(data => data.fact)
    .catch(e => console.error("Falha ao pegar um fato épico sobre gatos...\n", e));
}

async function menu() {
  console.log(`Menu maluco!!

O que você gostaria de ver?
1. Um número aleatório
2. Um fato sobre gatos (em inglês)
3. A data completa de agora`);

  const option = readInputUntilValidNumber("\n>");
  let message = null;

  switch (option) {
    case 1:
      message = randomNumber(0, 1000, true);
      break;
    case 2:
      message = await fetchCatFact();
      break;
    case 3:
      message = new Date().toLocaleString("br");
      break;
    default:
      console.error("Opção inválida!!");
      process.exit();
  }

  console.log(message);
}

menu();
