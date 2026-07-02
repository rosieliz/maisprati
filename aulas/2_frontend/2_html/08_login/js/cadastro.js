import { registrar } from "./autenticador.js";

document.querySelector("#form-cadastro").addEventListener("submit", (event) => {
    event.preventDefault();

    const usuario = {
        email: document.querySelector("#email").value,
        senha: document.querySelector("#senha").value,
    };

    try {
        registrar(usuario);
        alert("Usuário cadastrado com sucesso! Faça login para continuar.");
        window.location.href = "login.html";
    } catch (err) {
        console.error(err);
        document.querySelector("#aviso").textContent = err.message;
    }
});
