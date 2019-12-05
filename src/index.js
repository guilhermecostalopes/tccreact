import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UsuarioPesquisa from './usuarios/pesquisar/usuario-pesquisar';
import UsuarioForm from './usuarios/formulario/usuario-form';
import GrupoPesquisa from './grupos/pesquisar/grupo-pesquisar';
import GrupoForm from './grupos/formulario/grupo-form';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/usuarioPesquisa" component={UsuarioPesquisa} />
      <Route path="/usuarioForm" component={UsuarioForm} />
      <Route path="/grupoForm" component={GrupoForm} />
      <Route path="/grupoPesquisa" component={GrupoPesquisa} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
