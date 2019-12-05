import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ApiGrupoService from '../../service/ApiServiceGrupo';

import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Growl} from 'primereact/growl';
import {Toolbar} from 'primereact/toolbar';

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
    }

    render() {
        return (
        <>
            <Growl ref={el => (this.growl = el)} />
            <Toolbar style={{background:'#007ad9'}}>
                <font style={{color: '#f0f8ff'}}>Grupo novo</font>
            </Toolbar>
            <Toolbar style={{background:'#FFFCFC'}}>
                <label for="nome" class="first">Nome *</label><br />
                <InputText value={this.grupo.nome} 
                    onChange={(e) => this.setState({nome: e.target.value})} />
            </Toolbar>
            <Toolbar>
                <Button onClick={this.salvarGrupo} icon="pi pi-save" 
                    tooltip="Salvar" tooltipOptions={{position: 'bottom'}} />&nbsp;
                <Button icon="pi pi-refresh" tooltip="Limpar" 
                    tooltipOptions={{position: 'bottom'}} />&nbsp;
                <Link to='/grupoPesquisa'>
                    <Button icon="pi pi-angle-double-left" tooltip="Voltar" 
                        tooltipOptions={{position: 'bottom'}} />&nbsp;
                </Link>
            </Toolbar>
        </>
    );
  }
}

export default GrupoForm;
