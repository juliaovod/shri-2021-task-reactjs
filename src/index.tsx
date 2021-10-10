import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import App from '@/App';

import 'UiKit/theme/index.css';

const browserHistory = createBrowserHistory();

const createApp = (): void => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <App />
    </Router>,
    document.getElementById('app-root'),
  );
};

createApp();
