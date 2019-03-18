import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './components/App';
import configureStore from 'src/client/app/configureStore';

const renderApp = (config: any) => {
  const appContainerNode = document.getElementById('container');

  const { store, history } = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    appContainerNode
  );
};

document.addEventListener('DOMContentLoaded', () => {
  if ((module as any).hot) {
    // dev mode
    const config = require('../config.json');

    // local path to server
    config.service = {
      url: `https://${process.env.IP}:3333/`,
      path: '/',
    };

    renderApp(config);
  } else {
    // get config to remote service
    fetch('/config/config.json')
      .then((response) => {
        return response.json();
      })
      .then((config) => {
        renderApp(config);
      });
  }
});
