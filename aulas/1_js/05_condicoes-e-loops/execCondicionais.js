/*
 * Crie um programa com a idade do aluno e se ele possui autorização (responda com sim ou não).
 * O sistema deve mostrar:
 * - Acesso permitido, se o aluno tiver 14 anos ou mais e autorização == sim.
 * - Acesso com responsável, se o aluno tiver 12 ou 13 anos e autorização == sim.
 * - Acesso negado, se o aluno tiver menos de 12 anos ou se não tiver autorização.
 */

const idade = 13;
const autorizado = true;

const resultado = conferirAcesso();
console.log(resultado);

function conferirAcesso() {
    const mensagemNegada = "Acesso negado.";
    if (!autorizado) return mensagemNegada;

    switch (true) {
        case idade >= 14: return "Acesso permitido";
        case idade >= 12: return "Acesso com responsável";
        default: return mensagemNegada;
    }
}
