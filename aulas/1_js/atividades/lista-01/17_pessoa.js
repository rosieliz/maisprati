/*
 * Dado o objeto pessoa com propriedades nome e idade, acesse e imprima
 * o valor de idade. Adicione uma nova propriedade chamada email ao objeto
 * pessoa que já possui nome e idade.
 */

const person = {
  name: "Liz",
  age: 21,
};

console.log("Idade: ", person.age);

if (person.name && person.age) {
 person.email = "ab.c@gmail.com";
}
console.table(person);
