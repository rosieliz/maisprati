/*
  const objeto = {
    propriedade1: valor1,
    propriedade2: valor2
  }
 */

const aluno = {
  nome: "Igor",       // string
  idade: 21,          // number
  matriculado: true,  // boolean
  // notas: [8, 8, 9],   // array
  nota: 8,   // array
  endereco: {         // objeto
    cidade: "Nova Hartz",
    estado: "RS"
  },
  atualizarNota: (nota) => {
    aluno.nota = nota;
  }
};

for (const [k, v] of Object.entries(aluno)) {
  console.log(`${k}: ${v}`);
}
