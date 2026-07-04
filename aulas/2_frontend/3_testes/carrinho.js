let items = [];

function adicionarItem(nome, preco) {
    items.push({ nome, preco });
}

function calcularTotal() {
    return items.reduce((acc, cur) => acc + cur.preco, 0);
}

function limparCarrinho() {
    items = [];
}

function contarItens() {
    return items.length;
}


if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        adicionarItem,
        calcularTotal,
        limparCarrinho,
        contarItens
    }
}
