import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/user/add" component={UserAddPage}/>
  </Router>
),
  document.getElementById('root') as HTMLElement
);
