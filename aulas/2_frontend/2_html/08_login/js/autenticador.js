const CHAVE_USUAROS = "usuarios";
const CHAVE_SESSAO = "usuarioLogado";


function lerUsuarios() {
    const usuarios = localStorage.getItem(CHAVE_USUAROS);
    return usuarios ? JSON.parse(usuarios) : [];
}

export function registrar(usuario) {
    const usuarios = lerUsuarios();

    if (usuarios.some(user => user.emal === usuario.emal)) {
        throw new Error("Email já cadastrado. Por favor, cadastre um email diferente.");
    }

    usuarios.push(usuario);
    localStorage.setItem(CHAVE_USUAROS, JSON.stringify(usuarios));
}

export function login(email, senha) {
    const usuarios = lerUsuarios();
    if (!usuarios) {
        alert("Nenhum usuáro cadastrado.");
        return;
    }

    const usuario = usuarios.find(user => user.email === email && user.senha === senha);
    if (!usuario) {
        throw new Error("Email ou senha incorreta.");
    }

    localStorage.setItem(CHAVE_SESSAO, JSON.stringify({ email: usuario.email }));
    alert("Login realizado com sucesso!");

    return usuario;
}
