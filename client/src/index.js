import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/sobre" component={Sobre} />
      </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();