let totalTestes = 0;
let testesOk = 0;

function expect(valorRecebido) {
    return {
        toBe(valorEsperado) {
            totalTestes++;

            if (valorRecebido === valorEsperado) {
                testesOk++;
                console.log("Passou no teste.");
            } else {
                console.log("Reprovou no teste.");
            }
        }
    }
}

function test(nome, funcaoDeTeste) {
    console.log(`Iniciando:  ${nome}`);
    funcaoDeTeste();
    console.log();
}

function resumo() {
    console.log(`\n${testesOk}/${totalTestes} passaram.`);
}


export {
    expect,
    test,
    resumo
}
