import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import ApiUsuarioService from '../../service/ApiServiceUsuario';
import ApiGrupoService from '../../service/ApiServiceGrupo';

import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Growl} from 'primereact/growl';
import {Calendar} from 'primereact/calendar';
import {Dropdown} from 'primereact/dropdown';
import {Toolbar} from 'primereact/toolbar';

class UsuarioForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grupo: {
        id: '',
        grupo: '',
        nome: '',
        sobrenome: '',
        dataAniversario: ''
      }
    }
    this.state = {
      grupos: []
    }
    this.usuario = {
        id: null,
        grupo: null,
        nome: null,
        sobrenome: null,
        dataAniversario: null
    }
    this.salvarUsuario = this.salvarUsuario.bind(this);
  }

  salvarUsuario = (e) => {
    e.preventDefault();
    let usuario = {id: this.state.id, 
      grupo: this.state.grupo,
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      dataAniversario: this.state.dataAniversario};
      ApiUsuarioService.salvar(usuario).then(res => {
        this.growl.show({severity: res.data.tipoMensagem.tipo, 
            summary: res.data.tipoMensagem.sumario, 
            detail: res.data.tipoMensagem.mensagem});
      }, (err) => {
          this.growl.show({severity: err.response.data.tipoMensagem.tipo, 
              summary: err.response.data.tipoMensagem.sumario, 
              detail: err.response.data.tipoMensagem.mensagem});
      });
  }

  componentDidMount() {
    this.setState({
      grupos: [ApiGrupoService.todos().then(
        res => {
          return res.data.lista;
        }
      )]
    }, console.log("grupos", this.state.grupos))
  }
  
  render() {
    
    return (
      <>
        <Growl ref={el => (this.growl = el)} />
        <Toolbar style={{background:'#007ad9'}}>
          <font style={{color: '#f0f8ff'}}>Usuário novo</font>
        </Toolbar>
        <Toolbar style={{background:'#FFFCFC'}}>
          <label for="nome" class="first">Grupo *</label><br />
          <Dropdown value={this.usuario.grupo} options={this.state.grupos}
            onChange={(e) => {this.setState({grupo: e.value})}} 
            placeholder="Selecione o grupo"/><br />
          <label for="nome" class="first">Nome *</label><br />
          <InputText value={this.usuario.nome} 
            onChange={(e) => this.setState({nome: e.target.value})} /><br/>
          <label for="nome" class="first">Sobrenome *</label><br />
          <InputText value={this.usuario.sobrenome} 
            onChange={(e) => this.setState({sobrenome: e.target.value})} /><br/>
          <label for="nome" class="first">Aniversário *</label><br />
          <Calendar value={this.usuario.dataAniversario} dateFormat="dd/mm/yy"
            onChange={(e) => this.setState({dataAniversario: e.value})} /><br/>
        </Toolbar>
        <Toolbar>
          <Button onClick={this.salvarUsuario} icon="pi pi-save" 
            tooltip="Salvar" tooltipOptions={{position: 'bottom'}} />&nbsp;
          <Button icon="pi pi-refresh" tooltip="Limpar" 
            tooltipOptions={{position: 'bottom'}} />&nbsp;
          <Link to='/usuarioPesquisa'>
            <Button icon="pi pi-angle-double-left" tooltip="Voltar" 
              tooltipOptions={{position: 'bottom'}} />&nbsp;
          </Link>
        </Toolbar>
      </>
    );
  }
}

export default UsuarioForm;
