import React, { Component } from 'react';
import './App.css';

import {Menubar} from 'primereact/menubar';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {

  navigateToPage = (path) => {
		console.log('Navigate to path ' + path);
		this.props.history.push(path);
	}

    constructor() {
    super();
    this.state = {
      items:[
        {
          label:'Grupos',
          icon:'pi pi-folder-open', 
          command: ()=>{ this.navigateToPage('/grupoPesquisa') }
        },
        {
          separator:true
        },
        {
          label:'Usuários',
          icon:'pi pi-users', 
          command: ()=>{ this.navigateToPage('/usuarioPesquisa') }
        }
      ]
    }
  }

  render() {
    return (
      <>
      <div>
        <Menubar model={this.state.items} />
      </div>
      <div className="App">
      </div>
      </>
    );
  }
}

export default App;
