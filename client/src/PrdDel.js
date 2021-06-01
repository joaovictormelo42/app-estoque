import React from 'react';
import axios from 'axios';
import Api from './Api';
//exporta classe PrdCad com status dos itens que vamos escolher deletar
export default class PrdDel extends React.Component{
    state = {
        id: '',
    };
    //evento criado para trabalhar a identificação dos dados no campo
    handleChange = event => {
        this.setState({ id: event.target.value });
    };
    //evento criado para deletar os dados da nossa tabela com o método DELETE
    handleSubmit = event => {
        event.preventDefault();
        //vamos deletar com base no código id passado pelo usuário
        //axios.delete(`http://localhost:3001/produtos/${this.state.id}`)
        Api.delete(`produtos/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };
    //cria o formulário para preenchimento dos campos
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Código produto:
                        <input type="text" name="id" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Deletar</button>
                </form>
            </div>          
        )
    }
}