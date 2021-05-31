const knex = require('knex');
//direcionamento do arquvio de banco e modelo da biblioteca utilizada.
const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "produtos.sqlite3"
  }
});
//exportar modulo para utilizar em produtos.js
module.exports = connectedKnex;