import React from 'react';
//import axios from 'axios';
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
    handleSubmit = async event => {
        event.preventDefault();
        /*
        
        // utilizando o axios para criar a url com base no state.id
        axios.delete(`http://localhost:3001/produtos/${this.state.id}`)  
        
        // outra forma de realizar a comunicação é já passar uma url base no Api.Js
        Api.delete(`produtos/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        
        */
        
        //utilizando await e async resolvemos as promises retornando os valores
        const response = await Api.delete(`produtos/${this.state.id}`);

        console.log(response);
        console.log(response.data);

    };
    //cria o campo para informar o código do produto relacionado ao registro que vamos apagar
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