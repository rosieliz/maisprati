/*
 * Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
 * no seguinte: existe uma tabela com os dados de cada funcionalidade:
 * matrícula, nome e salário bruto. Escreva um programa que leia e processe
 * a tabela e emita (escreva na tela), cada funcionário, seu contracheque,
 * cujo formato é dado a seguir:
 * ○ Matrícula:
 * ○ Nome:
 * ○ Salário bruto:
 * ○ Dedução INSS:
 * ○ Salário líquido:
 * ○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto
 * e a redução do INSS).
 */

import { random } from "./lib";

let registrationID = 0;

// Fonte: https://www.contabilizei.com.br/contabilidade-online/desconto-inss/#como-funciona-o-desconto-do-inss-no-salario-clt
// function calculateINSS(salary) {
//   if (salary <= 1621) return 7.5;
//   else if (salary <= 2092.84) return 9;
//   else if (salary <= 4354.27) return 12;
//   else if (salary <= 8475.55) return 14;
//   return null;
// }

async function generateEmployee() {
  const req = await fetch("https://gerador-nomes.wolan.net/nome/aleatorio");
  const res = await req.json();
  const grossSalary = random(2000, 5000);
  const inss = 12;

  return {
    ["Matricula"]:  registrationID++,
    ["Nome"]: res.join(" "),
    ["Salario bruto"]: grossSalary,
    ["INSS"]: inss,
    ["Salario líquido"]: grossSalary * ((100 - inss) / 100),
  };
}

async function main() {
  // descomente a linha abaixo para mostrar todos os resultados como pedido no enunciado... ao custo de acabar com o servidor do dono da API o7
  // for (let i = 0; i < 80; i++) {
  for (let i = 0; i < 5; i++) {
    const employee = await generateEmployee();
    console.table(employee);
  }
}

main();
