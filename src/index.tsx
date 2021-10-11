import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import App from '@/App';
import config from '@/config.json';

import 'UiKit/theme/index.css';

const browserHistory = createBrowserHistory();

const createApp = (): void => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <App />
    </Router>,
    document.getElementById(config.APP_ROOT_ID),
  );
};

createApp();
