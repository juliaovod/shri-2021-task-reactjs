import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'UiKit/components/Button';

import 'UiKit/theme/index.css';

const createApp = (): void => {
  ReactDOM.render(
    <div>
      Hello! It&apos;s my feature CLI Server React app

      <br/>

      <Button>Save</Button>

      <Button theme="secondary">Cancel</Button>

      <Button isDisabled>Run build</Button>
    </div>,
    document.getElementById('root'),
  );
};

createApp();
