import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouters from './config/routes';
import { Provider } from 'react-redux';
import myStore from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <BrowserRouter>
    <App />
    <AppRouters/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


