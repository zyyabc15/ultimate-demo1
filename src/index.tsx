import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/user/add" component={UserAddPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
