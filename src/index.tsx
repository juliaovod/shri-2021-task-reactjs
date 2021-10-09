import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'UiKit/components/Button';
import Icon from 'UiKit/components/Icon';
import IconButton from 'UiKit/components/IconButton';
import TextField from 'UiKit/components/TextField';
import Typography from 'UiKit/components/Typography';

import 'UiKit/theme/index.css';

const createApp = (): void => {
  ReactDOM.render(
    <div>
      <h1>UI Kit here</h1>
      Hello! It&apos;s my feature CLI Server React app

      <h3>Typography</h3>

      <Typography tagName="h1" size="l">philip1967/my-awesome-repo</Typography>

      <Typography tagName="p" theme="gray" size="xs">Configure repository connection and synchronization settings.</Typography>

      <h3>Inputs</h3>

      <TextField label="Field top" value="I am input" isRequired />

      <TextField label="Field left" value="Are you happy?" labelPosition="left" />

      <TextField value="I am disabled" isDisabled />

      <h2>Buttons</h2>

      <Button>Save</Button>

      <Button theme="secondary">Cancel</Button>

      <Button
        iconLeft={<Icon name="icon-play" size="xs" />}
        theme="secondary"
      >
        Run build
      </Button>

      <Button
        iconLeft={<Icon name="icon-settings" size="xs" />}
        theme="secondary"
      >
        Settings
      </Button>

      <IconButton><Icon name="icon-settings" /></IconButton>
      <IconButton><Icon name="icon-play" /></IconButton>

      <h2>Icons</h2>

      <Icon name="icon-code-commit" />
      <Icon name="icon-calendar" />
      <Icon name="icon-clear" />
      <Icon name="icon-clock" size="m" />
      <Icon name="icon-done" size="m" />
      <Icon name="icon-fail" size="m" />
      <Icon name="icon-play" />
      <Icon name="icon-rebuild" />
      <Icon name="icon-settings" />
      <Icon name="icon-stopwatch" />
      <Icon name="icon-user" />
    </div>,
    document.getElementById('root'),
  );
};

createApp();
