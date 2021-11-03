import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import { initProjectTheme } from 'UiKit/utils/theme';

import App from '@/App';
import config from '@/config.json';

import '@/analytics';

import 'UiKit/theme/index.css';

const browserHistory = createBrowserHistory();

initProjectTheme();

const createApp = (): void => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <App />
    </Router>,
    document.getElementById(config.APP_ROOT_ID),
  );
};

createApp();
