import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import ApiGrupoService from '../../service/ApiServiceGrupo';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Toolbar} from 'primereact/toolbar';

class GrupoPesquisa extends Component {

  constructor() {
    super();
    this.state = {};
  }

  displaySelection(data) {
    
  }

  componentDidMount() {
    ApiGrupoService.todos().then(
      res => this.setState({grupos: res.data.lista})
    );
  }

  render() {

    return (
      <>
        <DataTable value={this.state.grupos}  footer={this.displaySelection(this.state.selectedGrupo)}
          selection={this.state.selectedGrupo} onSelectionChange={e => this.setState({selectedGrupo: e.value})}>
          <Column selectionMode="single" style={{width:'4em'}}/>
          <Column field="nome" header="Nome" />
        </DataTable>
        <Toolbar>
          <h4>Campos com * são obrigatórios !</h4>
          <Button icon="pi pi-filter" tooltip="Pesquisar" tooltipOptions={{position: 'bottom'}} />&nbsp;
          <Link to='/grupoForm'>
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

export default GrupoPesquisa;