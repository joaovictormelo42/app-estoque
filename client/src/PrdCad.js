import React from 'react';
//import axios from 'axios';
import Api from './Api';
//exporta classe PrdCad com status dos itens que vamos cadastrar no formulário
export default class PrdCad extends React.Component{
    state = {
        nome: '',
        preco: '',
        estoque: '',
    };
    //evento criado para trabalhar a identificação dos dados no campo
    handleChange = event => {
        this.setState({ nome: event.target.value });
        this.setState({ preco: event.target.value });
        this.setState({ estoque: event.target.value });
    };
    //evento criado para enviar os dados para nossa tabela com o método POST
    handleSubmit = async event => {
        event.preventDefault();

        const produto = {
            nome: this.state.nome,
            preco: this.state.preco,
            estoque: this.state.estoque,
        };
        /*
        
        //utilizando axios para criar a url base
        axios.post(`http://localhost:3001/produtos`, {produto})
        
        //com o Api.js implementado não precisamos digitar toda url base
        Api.post(`produtos`, {produto})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        
        */

        //utilizando await e async resolvemos as promises retornando os valores
        const response = await Api.post(`produtos`, {produto});

        console.log(response);
        console.log(response.data);

    };
    //cria o formulário para preenchimento dos campos
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome: 
                        <input type="text" name="nome" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Preço:
                        <input type="integer" name="preco" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Estoque:
                        <input type="number" name="estoque" min="1" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Adicionar</button>
                </form>
            </div>           
        )
    }
}