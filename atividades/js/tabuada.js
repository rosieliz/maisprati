function readNullishNumberInput() {
    const input = prompt("|>");
    const parsedInput = Number(input?.trim());

    if (!parsedInput && parsedInput !== 0) {
        console.log("\nPor favor, insira um número válido.");
        return null;
    }
    return parsedInput;
}

function main() {
    console.log(`=== TABUADA ===\n
Qual número você gostaria de multiplicar?`);

    let number = 0;
    while (true) {
        const input = readNullishNumberInput();
        if (input !== null) {
            number = input;
            break;
        }
    }

    console.log("\n\n=== RESULTADOS ===\n");
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number*i}`);
    }
}

main();
