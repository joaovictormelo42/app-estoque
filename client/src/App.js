//importar estilos utilizados e também dados da comunicação para api.
import "./App.css";
import api from './api/produtos.js';
/*
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
*/

//criado uma classe que vai definir o estado dos produtos para exibir em tela os dados.
class App extends Component {
  state = {
    produtos: [],
  }
  //após renderização carrega dados remotos pela url encaminhada na api.
  async componentDidMount() {
    const response = await api.get('/produtos');
    this.setState({ produtos: response.data });
  }

  render() {
    const { produtos } = this.state;
    //retorna valores alcançados pelo get e lista em tela.
    return (
      <div>
        <h1> Lista de Produtos</h1>
          {produtos.map(produto => (
            <li key={produto.show.id}>
              <h2>
                <strong>Nome: </strong>
                {produto.show.nome}
              </h2>
              <p>
                {produto.show.preco}
              </p>
              <p>
                {produto.show.quantidade}
              </p>
            </li>
          ))}
      </div>
    );
  };
};

export default App;