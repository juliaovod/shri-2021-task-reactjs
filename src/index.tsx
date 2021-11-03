import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { initProjectTheme } from 'UiKit/utils/theme';

import App from '@/App';
import config from '@/config.json';

import 'UiKit/theme/index.css';

initProjectTheme();

const createApp = (): void => {
  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>,
    document.getElementById(config.APP_ROOT_ID),
  );
};

createApp();
