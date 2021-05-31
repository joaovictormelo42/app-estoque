const knex = require("./knex");
//criado função para inserir produtos (POST)
function cadastrarProduto(produto) {
  return knex("produtos").insert(produto);
};
//criado função para listar produtos (GET)
function listarTodosProdutos() {
  return knex("produtos").select("*");
};
//criado função para deletar produtos (DELETE)
function deletarProduto(id) {
  return knex("produtos").where("id", id).del();
};
//criado função para editar/atualizar produtos (PATCH)
function editarProduto(id, produto) {
  return knex("produtos").where("id", id).update(produto);
}
//Exporta os módulos para usarmos em server.js
module.exports = {
  cadastrarProduto,
  listarTodosProdutos,
  deletarProduto,
  editarProduto
}