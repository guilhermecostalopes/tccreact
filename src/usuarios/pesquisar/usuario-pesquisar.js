import React, { Component } from 'react';

import ApiUsuarioService from '../../service/ApiServiceUsuario';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';

class UsuarioPesquisa extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    ApiUsuarioService.todos().then(
      data => this.setState({usuarios: data.lista})
    );
  }

  render() {
    return (
      <DataTable value={this.grupos} selection={this.state.selectUsuario} 
        onSelectionChange={e => this.setState({selectUsuario: e.value})}>
        <Column field="grupo" header="Grupo" />
        <Column field="nome" header="Nome" />
        <Column field="sobrenome" header="Sobrenome" />
        <Column field="dataAniversario" header="Data de aniversário" />
      </DataTable>
    );
  }
}

export default UsuarioPesquisa;
