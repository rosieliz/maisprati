import { sum, isEven } from "./functions.js";

test("Soma - deve somar dois números corretamente", () => {
    expect(sum(2, 5)).toBe(7);
});

test("É par - verifica se um número é par", () => {
    expect(isEven(8)).toBe(true);
});


