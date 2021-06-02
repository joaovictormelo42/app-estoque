import React, { Component } from 'react';
import api from './Api';

class App extends Component {
    state = {
        produtos: []
    };
    
    async componentDidMount() {

        const response = await api.get(`produtos`)
        this.setState({ produtos: Object.values(response.data) })
        console.log(response.data);
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