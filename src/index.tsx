import React from 'react';
import ReactDOM from 'react-dom';

import 'UiKit/theme/index.css';

const createApp = (): void => {
  ReactDOM.render(
    <p>Hello! It's my feature CLI Server React app</p>,
    document.getElementById('root'),
  );
};

createApp();
