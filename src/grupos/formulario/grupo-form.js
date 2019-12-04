import React, { Component } from 'react';
import ApiGrupoService from '../../service/ApiServiceGrupo';

import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Growl} from 'primereact/growl';

class GrupoForm extends Component {

    constructor(props) {
        super(props);
        this.grupo ={
            id: null,
            nome: null
        }
        this.salvarGrupo = this.salvarGrupo.bind(this);
    }

    salvarGrupo = (e) => {
        e.preventDefault();
        let grupo = {id: this.state.id, 
                    nome: this.state.nome};
        ApiGrupoService.salvar(grupo)
            .then(res => {
                this.growl.show({severity: res.data.tipoMensagem.tipo, 
                    summary: res.data.tipoMensagem.sumario, 
                    detail: res.data.tipoMensagem.mensagem});
        }, (err) => {
            this.growl.show({severity: err.response.data.tipoMensagem.tipo, 
                summary: err.response.data.tipoMensagem.sumario, 
                detail: err.response.data.tipoMensagem.mensagem});
        });
    }//res.data.

    render() {
        return (
        <div>
            <Growl ref={el => (this.growl = el)} />
            <h1>Nome *</h1>
            <InputText value={this.grupo.nome} 
                onChange={(e) => this.setState({nome: e.target.value})} />
            <Button onClick={this.salvarGrupo} label="Salvar" />
        </div>
    );
  }
}

export default GrupoForm;
