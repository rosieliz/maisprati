const alunos = [
  {
    nome: "Igor",
    idade: 21,
    matriculado: true,
    notas: [8, 8, 9],
    endereco: {
      cidade: "Nova Hartz",
      estado: "RS"
    }
  },
  {
    nome: "Fernando",
    idade: 40,
    matriculado: true,
    notas: [6, 8, 9],
    endereco: {
      cidade: "Porto Alegre",
      estado: "RS"
    }
  }
];

for (let aluno of alunos) {
  // console.log(`nome: ${aluno.nome}`);
  for (const [k, v] of Object.entries(aluno)) {
    console.log(`${k}: ${v}`);
  }
}
