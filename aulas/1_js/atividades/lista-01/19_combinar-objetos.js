/*
 * Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
 * combinando as propriedades de ambos, onde as propriedades de obj2 têm
 * precedência sobre as do obj1 em caso de conflitos.
 */

function combineObjects(obj1, obj2) {
  return {
    ...obj1,
    ...obj2,
  };
}

const obj1 = {
  name: "Igor",
  catAmount: 2,
};

const obj2 = {
  name: "Liz",
  age: 21,
};

console.log(combineObjects(obj1, obj2))
