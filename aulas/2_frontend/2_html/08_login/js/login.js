import { login } from "./autenticador.js";

document.querySelector("#form-login").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    try {
        const _ = login(email, senha);
        alert(`Bem-vindo, ${email}!`);
    } catch (err) {
        document.querySelector("#aviso").textContent = err.message;
        throw new Error(err);
    }


});
