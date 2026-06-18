/*
 * Crie um array de objetos com nome e nota de 6 alunos. Use for...of para
 * classificar cada aluno (Aprovado, Recuperação ou Reprovado) e exibir
 * o resultado. Use forEach para calcular e exibir separadamente a média dos
 * aprovados e a média dos reprovados.
 */

const students = [
  {
    name: "Sebastien Lewis",
    grade: 8
  },
  {
    name: "Jody Dion",
    grade: 4
  },
  {
    name: "Pâmela Fung",
    grade: 9
  },
  {
    name: "Daniela Caldwell",
    grade: 10
  },
  {
    name: "Roland Noel",
    grade: 6
  },
  {
    name: "Gordon Baird",
    grade: 5
  },
];

for (const { name, grade } of students) {
  const classification = grade < 6 ? "Reproved"
    : grade < 7 ? "Retake" : "Approved";
  console.log("%s - %s", name, classification);
}

let grades = {
  approved: [],
  reproved: []
}

students.forEach(student => {
  if (student.grade < 6) {
    grades.reproved.push(student.grade);
  } else if (student.grade >= 7) {
    grades.approved.push(student.grade);
  }
});

console.log();
Object.entries(grades).forEach(([ classification, values ]) => {
  const average = values.reduce((acc, cur) => acc + cur) / values.length;
  console.log(`${classification} average: ${average}`);
});
