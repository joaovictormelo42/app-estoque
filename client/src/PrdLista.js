import React from 'react';
import axios from 'axios';
import Api from './Api';
//exportamos a classe PrdLista com retorno da promessa com os dados dos registros.
export default class PrdLista extends React.component{
    state = {
        produtos: []
    };
    //método que vai executar a função GET para obter uma promessa de um objeto de resposta.
    componentDidMount(){
        //axios.get(`http://localhost:3001/produtos`)
        Api.get(`produtos`)
            .then(res => {
                const produtos = res.data;
                this.state({ produtos });
            });
    };
    //entrega informações dos dados enviados pelo método anterior.
    render(){
        return (
            <ul>
                { this.state.produtos.map(produto => <li> {produto.nome} </li>) }
                { this.state.produtos.map(produto => <li> {produto.preco} </li>) }
                { this.state.produtos.map(produto => <li> {produto.estoque} </li>) }
            </ul>
        )
    }
}