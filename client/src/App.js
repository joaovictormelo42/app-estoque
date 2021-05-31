import "./App.css";

function App() {
  return (
    <div classname="main">
      <div className="header">
        <h1> GERENCIAR ESTOQUE - REGISTROS </h1>
      </div>
      <div className="background">
        <div class="card">
          <div class="nome">
            <label>Descrição: </label>
            <input type="text" name="nomeProduto" id="nome"/>
          </div>
          <div class="preco">
            <label>Preço:</label>
            <input type="integer" name="precoProduto" id="preco"/>
          </div>
          <div class="estoque">
            <label>Estoque:</label>
            <input type="number" name="estoqueProduto" id="estoque" min="1" max="100"/>
          </div>
          <div class="button">
            <input type="submit" value="confirma"/> 
            <input type="reset"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;