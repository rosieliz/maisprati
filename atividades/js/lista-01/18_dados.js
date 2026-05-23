/*
 * Crie um objeto chamado dados que contém várias propriedades,
 * incluindo números, strings e arrays. Escreva uma função que retorne
 * um novo objeto apenas com as propriedades que são arrays.
 */

function retrieveArrays(obj) {
  let newObj = {};
  for (const [k, v] of Object.entries(obj)) {
    if (!Array.isArray(v)) continue;
    newObj[k] = v;
  }

  return newObj;
}

const book = {
  title: "Livro Entendendo Algoritmos",
  id: 7897925831904,
  tags: ["educativo", "tecnologia"]
};

const arrays = retrieveArrays(book);
console.log(arrays);
