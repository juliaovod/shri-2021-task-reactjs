import React from 'react';
import ReactDOM from 'react-dom';

import 'UiKit/theme/index.css';

const createApp = (): void => {
  ReactDOM.render(
    <div>
      Hello! It&apos;s my feature CLI Server React app
    </div>,
    document.getElementById('root'),
  );
};

createApp();
