import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import './locales/index';
import './index.css';

import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const scirpt = document.createElement('script');
scirpt.src = `${new Date().getTime()}`;

document.head.append(scirpt);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
);
