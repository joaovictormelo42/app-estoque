const knex = require("./knex");

function cadastrarProduto(produto) {
  return knex("produtos").insert(produto);
};

function listarTodosProdutos() {
  return knex("produtos").select("*");
};

function deletarProduto(id) {
  return knex("produtos").where("id", id).del();
};

function editarProduto(id, produto) {
  return knex("produtos").where("id", id).update(produto);
}

module.exports = {
  cadastrarProduto,
  listarTodosProdutos,
  deletarProduto,
  editarProduto
}