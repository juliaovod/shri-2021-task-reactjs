import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { initProjectTheme } from 'UiKit/utils/theme';

import App from '@/App';
import config from '@/config.json';
import createStore from '@/store';

import 'UiKit/theme/index.css';

const browserHistory = createBrowserHistory();

initProjectTheme();

const createApp = (): void => {
  const store = createStore();

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.getElementById(config.APP_ROOT_ID),
  );
};

createApp();
