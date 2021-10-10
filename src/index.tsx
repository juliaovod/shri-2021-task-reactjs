import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from '@/App';
import createStore from '@/store';

import 'UiKit/theme/index.css';

const browserHistory = createBrowserHistory();

const createApp = (): void => {
  const store = createStore();

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

createApp();
