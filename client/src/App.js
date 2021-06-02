import React, { Component } from 'react';
import api from './Api';

class App extends Component {
    state = {
        produtos: []
    };
    //método que vai executar a função GET para obter uma promessa de um objeto de resposta.
    async componentDidMount() {

        const response = await api.get(`produtos`)
        this.setState({ produtos: Object.values(response.data) })
        console.log(response.data);
        /*
        //axios.get(`http://localhost:3001/produtos`)
        api.get(`produtos`)
            .then(res => {
                const produtos = res.data;
                this.setState({ produtos });
            });
        */
    };

    render(){
        return (
            <div>
            <ul>
                {this.state.produtos.map((produto) => {
                    return(
                        <li  key={produto}>
                            <h1>{produto.nome}</h1>
                        </li>
                    )
                })}
            </ul>
            </div>
        )
    }
}
export default App;