/* 1 - Função sem parâmetros e sem retorno: Criar uma função simples que exiba uma
 * mensagem de saudação.
 * Instruções:
 * - Criar uma função chamada saudacao que não recebe parâmetros;
 * - Ex: a função deve exibir no console a mensagem "Olá, bem-vindo ao nosso sistema!";
 * - Chamar a função para que a ssaudação esja exibida.
 *
 *
 * 2 - Função com parâmetros: Criar uma função que receba bois números como parâmetros
 * e retorna a soma, subtração, multiplicação e divisão desses números.
 * Instruções:
 * - Criar uma função chamada soma que recebe dois parâmetros (a e b);
 * - A função deve retornar a soma dos dois parâmetros;
 * - Chamar a função passando dois números como argumentos e exibir o resultado no
 *   console.
 */

function saudacao() {
    console.log("Olá, bem-vindo ao nosso sistema!");
}
saudacao();


// chato de usar enums em js :/
const Operacao = Object.freeze({
    SOMA: 0,
    SUBTRACAO: 1,
    MULTIPLICACAO: 2,
    DIVISAO: 3
});

function calcular(a, b, op) {
    switch (op) {
        case Operacao.SOMA: return a + b;
        case Operacao.SUBTRACAO: return a - b;
        case Operacao.MULTIPLICACAO: return a * b;
        case Operacao.DIVISAO: return a / b;
        default: return undefined;
    }
}

console.log(`O resultado é: ${calcular(5, 12, Operacao.SOMA)}`);

