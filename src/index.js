import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/home/Home';
import CadastroVideo from './pages/cadastro/video/CadastroVideo.js';
import CadastroCategoria from './pages/cadastro/Categoria/CategoriaVideo';
import Page404 from './pages/404/Page404.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={Page404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

