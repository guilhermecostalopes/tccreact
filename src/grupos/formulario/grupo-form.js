import React, { Component } from 'react';
import ApiGrupoService from '../../service/ApiServiceGrupo';

import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';


class GrupoForm extends Component {

    constructor(props) {
        super(props);
        this.grupo ={
            id: '',
            nome: ''
        }
        this.salvarGrupo = this.salvarGrupo.bind(this);
    }

    salvarGrupo = (e) => {
        e.preventDefault();
        let grupo = {id: this.grupo.id, 
                    nome: this.grupo.nome};
        ApiGrupoService.salvar(grupo)
            .then(res => {
                this.setState({message : 'Grupo salvo com sucesso !'});
                this.props.history.push('/grupoForm');
        });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <h1>Nome *</h1>
                <InputText value={this.grupo.nome} onChange={this.onChange} />
                <Button variant="contained" color="primary" onClick={this.salvarGrupo}>Salvar</Button>
        </div>
    );
  }
}

export default GrupoForm;
