/*
 * Crie um objeto representando um funcionário com nome, cargo, salário e anos
 * de experiência. Use for...in para listar todos os dados. Com base nos anos de
 * experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário,
 * de 3 a 5 anos = 10%, acima de 5 anos = 15%.
 */

const employee = {
  name: "Liz",
  role: "Systems Developer",
  salary: 4200,
  yearsOfExperience: 4
};

const entries = Object.entries(employee);
for (const i in entries) {
  const [key, value] = entries[i];
  console.log(`${key}: ${value}`);
}

let yearlyBonus = 0;
switch (true) {
  case employee.yearsOfExperience <= 2:
    yearlyBonus =  0.05;
    break;
  case employee.yearsOfExperience <= 5:
    yearlyBonus =  0.10;
    break;
  default:
    yearlyBonus =  0.15;
}

console.log(`\nYearly bonus: ${employee.salary * yearlyBonus}`);
