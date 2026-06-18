// 1. Calcular o total de vendas de uma loja.
function totalSales() {
    const sales = [100, 200, 150, 300];
    const total = sumTotal(sales);
    console.log("Total de vendas: ", total);
}

// 2. Calcular a média de notas de um estudante.
function averageGrade() {
    const grades = [8, 7, 9, 10, 6];
    const average = sumTotal(grades) / grades.length;
    console.log("Média de notas: ", average);
}

// 3. Procurar um valor em um array.
function findNumber() {
    const numbers = [10, 15, 20, 25, 30];
    const target = 15;

    let low = 0;
    let high = numbers.length - 1;

    while (low <= high) {
        const mid = parseInt((low + high) / 2);
        const guess = numbers[mid];
        if (guess === target) {
            console.log(`O número '${target}' foi encontrado na posição '${mid}'.`);
            return;
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    console.log("O número não pôde ser encontrado.");
}

// 4. Contagem de números pares.
function countEvenNumbers() {
    const numbers = [5, 12, 8, 41, 97, 38, 111, 92];
    let evenNumbers = [];
    let evenCount = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
            evenCount++;
        }
    }

    console.log(`Foram encontrados ${evenCount} números pares.\nNúmeros: ${evenNumbers}.`);
}

/**
 * Sums every number in an array.
 * @param  {number[]} list - The list to iterate on
 * @return {number}        - The total of all numbers
 */
function sumTotal(list) {
    return list.reduce((total, current) => total + current);
}

