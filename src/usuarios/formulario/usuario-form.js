import React, { Component } from 'react';

import ApiUsuarioService from '../../service/ApiServiceUsuario';
import ApiGrupoService from '../../service/ApiServiceGrupo';

import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Growl} from 'primereact/growl';
import {Calendar} from 'primereact/calendar';
import {Dropdown} from 'primereact/dropdown';

class UsuarioForm extends Component {

  constructor(props) {
    super(props);
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

  render() {

    let a = [
      ApiGrupoService.todos().then(
        res => {
          return res;
      })
    ]
    
    return (
      <div>
            <Growl ref={el => (this.growl = el)} />
            <h1>Grupo *</h1>
            <Dropdown value={this.usuario.grupo} options={a}
              onChange={(e) => {this.setState({grupo: e.value})}} 
              placeholder="Selecione o grupo"/>
            <h1>Nome *</h1>
            <InputText value={this.usuario.nome} 
                onChange={(e) => this.setState({nome: e.target.value})} /><br/>
            <h1>Sobrenome *</h1>
            <InputText value={this.usuario.sobrenome} 
                onChange={(e) => this.setState({sobrenome: e.target.value})} /><br/>
            <h1>Aniversário *</h1>
            <Calendar value={this.usuario.dataAniversario} dateFormat="dd/mm/yy"
                onChange={(e) => this.setState({dataAniversario: e.value})} /><br/>
            <Button onClick={this.salvarUsuario} label="Salvar" />
        </div>
    );
  }
}

export default UsuarioForm;
