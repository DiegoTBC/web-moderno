const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

/* A função recebe um objeto, se ele nao tiver id, atribui um a ele.
    Depois o objeto produtos recebe esse outro objeto, q será armazenado no indice referente ao id.
    Retorna o objeto
*/
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || "Produto inexistente"
}

//Retorna todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}


module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}