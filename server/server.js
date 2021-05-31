const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require("./db/produtos");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/produtos", async (req, res) => {
  const results = await db.cadastrarProduto(req.body);
  res.status(201).json({ id: results[0] });
});

app.get("/produtos", async (req, res) => {
  const produtos = await db.listarTodosProdutos();
  res.status(200).json({ produtos });
});

app.patch("/produtos/:id", async (req, res) => {
  const id = await db.editarProduto(req.params.id, req.body);
  res.status(200).json({ id });
});

app.delete("/produtos/:id", async (req, res) => {
  await db.deletarProduto(req.params.id);
  res.status(200).json({ success: true });
});

//app.get('/', (req, res) => { res.status(200).json({ success: true }); });

app.listen(3001, ()=>{ console.log('Servidor rodando na porta 3001'); });