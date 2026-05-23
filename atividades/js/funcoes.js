/*
 * 1. Crie uma função que calcule a média de três notas passadas como parâmetros.
 */
function calcularMedia() {
  return [...arguments].reduce((acc, cur) => acc + cur) / arguments.length;
}
console.log("Media: ", calcularMedia(7, 8, 7));



/*
 * 2. Crie uma função que verifique se uma pessoa é maior de idade ou menor de idade.
 */
function conferirMaioridade(idade) {
  console.log(
    "\n%s\n",
    idade >= 18 ? "Você é maior de idade" : "Você é menor de idade"
  );
}
conferirMaioridade(21);



/*
 * 3. Crie uma função que receba dois números e um operador
 * e retorne o resultado da operação.
 */
function calculadora(n1, n2, op) {
  switch (op) {
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
    case '/': return n1 / n2;
    default: throw new Error("Operador inválido!");
  }
}

const data = [
  { n1: 5 , n2: 12, titulo: "Soma"         , op: '+' },
  { n1: 24, n2: 32, titulo: "Subtração"    , op: '-' },
  { n1: 15, n2: 51, titulo: "Multiplicação", op: '*' },
  { n1: 63, n2: 9 , titulo: "Divisão"      , op: '/' },
];

data.forEach(({ n1, n2, titulo, op }) => {
  const tituloFormatado = titulo.padEnd(13, ' ');
  const resultado = calculadora(n1, n2, op);
  console.log(`${tituloFormatado}: ${n1} ${op} ${n2} = ${resultado}`);
});
