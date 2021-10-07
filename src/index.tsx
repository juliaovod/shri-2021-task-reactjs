import React from 'react';
import ReactDOM from 'react-dom';

const createApp = (): void => {
  ReactDOM.render(
    <div>
      Hello! It's my feature CLI Server React app
    </div>,
    document.getElementById('root'),
  );
};

createApp();
