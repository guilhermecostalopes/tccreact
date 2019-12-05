import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import ApiUsuarioService from '../../service/ApiServiceUsuario';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Toolbar} from 'primereact/toolbar';

class UsuarioPesquisa extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    ApiUsuarioService.todos().then(
      res => this.setState({usuarios: res.data.lista})
    );
  }

  displaySelection(data) {
    
  }

  render() {
    return (
      <>
        <DataTable value={this.state.usuarios} footer={this.displaySelection(this.state.selectedUsuario)}
          selection={this.state.selectedUsuario} onSelectionChange={e => this.setState({selectedUsuario: e.value})}>
          <Column selectionMode="single" style={{width:'4em'}}/>
          <Column field="grupo.nome" header="Grupo" />
          <Column field="nome" header="Nome" />
          <Column field="sobrenome" header="Sobrenome" />
          <Column field="dataAniversario" header="Data de aniversário" />
          <Column field="dataCadastro" header="Data do cadastro" />
        </DataTable><br/>
        <Toolbar>
          <h4>Campos com * são obrigatórios !</h4>
          <Button icon="pi pi-filter" tooltip="Pesquisar" tooltipOptions={{position: 'bottom'}} />&nbsp;
          <Link to='/usuarioForm'>
            <Button icon="pi pi-plus-circle" tooltip="Novo" tooltipOptions={{position: 'bottom'}} />
          </Link>&nbsp;
          <Button icon="pi pi-ban" tooltip="Limpar" tooltipOptions={{position: 'bottom'}}  />&nbsp;
          <Button icon="pi pi-pencil" tooltip="Alterar" tooltipOptions={{position: 'bottom'}}  />&nbsp;
          <Button icon="pi pi-trash" tooltip="Deletar" tooltipOptions={{position: 'bottom'}}  />&nbsp;
        </Toolbar>
      </>
    );
  }
}

export default UsuarioPesquisa;
