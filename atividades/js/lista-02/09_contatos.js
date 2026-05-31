/*
 * Crie um array de objetos onde cada objeto representa um contato com nome,
 * telefone e e-mail. Use forEach para listar todos os contatos formatados.
 * Permita buscar um contato pelo nome usando for...of e exiba os dados
 * encontrados ou uma mensagem de "não encontrado".
 */

const contacts = [
  {
    name: "Cool Neighbor",
    phone: 3372913300,
    email: "abb@gmail.com"
  },
  {
    name: "Annoying Neighbor",
    phone: 336299007,
    email: "bba@gmail.com"
  },
  {
    name: "Margaret",
    phone: 331542236,
    email: "cce@gmail.com"
  }
];

contacts.forEach(({ name, phone, email }) => {
  console.log("%s\n%s\n%s\n---", name, phone, email);
});

const search = prompt("\nWho would you like to find?").toLowerCase();
for (const contact of contacts) {
  if (contact.name.toLowerCase().includes(search)) {
    console.log(
      "---\nInfo found:\n\n%s\n%s\n%s",
      contact.name, contact.phone, contact.email
    );
    process.exit();
  }
}
console.log("Person not found.");
