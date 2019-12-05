import React, { Component } from 'react';
import {Menubar} from 'primereact/components/menubar/Menubar';

export class AppMenu extends Component {
    
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
        <div>
          <Menubar model={this.state.items} />
        </div>
    );
  }
}

export default AppMenu
