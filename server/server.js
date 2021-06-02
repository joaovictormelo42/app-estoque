const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require("./db/produtos");
const cors = require("cors");

app.use(cors())

//use bodyParser para trabalhar com os dados vindos do client.
app.use(bodyParser.urlencoded({ extended: false })); // boa prática, evita envio de campos encadeados
app.use(bodyParser.json());
//implementação método POST para inserir registros
app.post("/produtos", async (req, res) => {
  const results = await db.cadastrarProduto(req.body);
  res.status(201).json({ id: results[0] });
});
//implementação método GET para listar registros
app.get("/produtos", async (req, res) => {
  const produtos = await db.listarTodosProdutos();
  res.status(200).json({ produtos });
});
//implementação método PATCH para atualizar registros
app.patch("/produtos/:id", async (req, res) => {
  const id = await db.editarProduto(req.params.id, req.body);
  res.status(200).json({ id });
});
//implementação método DELETE para apagar registros
app.delete("/produtos/:id", async (req, res) => {
  await db.deletarProduto(req.params.id);
  res.status(200).json({ success: true });
});

//app.get('/', (req, res) => { res.status(200).json({ success: true }); });
//porta e mensagem padrão do serviço
app.listen(3001, ()=>{ console.log('Servidor rodando na porta 3001'); });