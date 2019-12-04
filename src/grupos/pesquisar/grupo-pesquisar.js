import React, { Component } from 'react';

import ApiGrupoService from '../../service/ApiServiceGrupo';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

class GrupoPesquisa extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    ApiGrupoService.todos().then(
      data => this.setState({grupos: data.lista})
    );
  }

    render() {
        return (
          <DataTable value={this.grupos} selection={this.state.selectedCar1} 
            onSelectionChange={e => this.setState({selectedCar1: e.value})}>
            <Column field="nome" header="Nome" />
          </DataTable>
        );
      }
}

export default GrupoPesquisa;