export async function buscarCEP(cep) {
    const formattedCep = cep.replace(/\D*\./g, "");

    if (formattedCep.length !== 8) {
        throw new Error("O CEP deve conter 8 dígitos.");
    }

    return await fetch(`https://viacep.com.br/ws/${formattedCep}/json/`)
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                throw new Error("CEP não encontrado. Erro:", data.erro);
            }
            return data;
        })
        .catch(err => {
            console.error("Erro ao buscar CEP:", err);
        });
}
