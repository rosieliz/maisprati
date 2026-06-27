import { buscarCEP } from "../services/viacep.js";

const cepField = document.querySelector("#cep");

cepField.addEventListener("blur", async () => {
    if (!cepField.value) return;

    try {
        const address = await buscarCEP(cepField.value);
        document.querySelector("#logradouro").value = address?.logradouro || "";
        document.querySelector("#bairro").value     = address?.bairro || "";
        document.querySelector("#cidade").value     = (address?.cidade ?? address?.localidade) || "";
        document.querySelector("#uf").value         = address?.uf || "";
    } catch (e) {
        console.error(e.message);
    }
});
