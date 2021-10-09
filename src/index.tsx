import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'UiKit/components/Button';
import Icon from 'UiKit/components/Icon';
import IconButton from 'UiKit/components/IconButton';
import TextField from 'UiKit/components/TextField';
import Typography from 'UiKit/components/Typography';
import DeployCard from '@/components/DeployCard';

import DeployStatusIcon from '@/components/DeployStatusIcon';
import DeployStatusText from '@/components/DeployStatusText';
import Footer from '@/components/Footer';

// eslint-disable-next-line camelcase
import _deployments_mockup from '../_deployments_mockup.json';

import 'UiKit/theme/index.css';

const createApp = (): void => {
  ReactDOM.render(
    <div>
      <h1>UI Kit here</h1>
      Hello! It&apos;s my feature CI Server React app

      <h2>Deploy card</h2>

      {/* @ts-ignore */}
      <DeployCard deployment={_deployments_mockup[1]} />

      {/* @ts-ignore */}
      <DeployStatusIcon deployment={_deployments_mockup[0]} />
      {/* @ts-ignore */}
      <DeployStatusText deployment={_deployments_mockup[0]} />
      {/* @ts-ignore */}
      <DeployStatusText deployment={_deployments_mockup[1]} />
      {/* @ts-ignore */}
      <DeployStatusText deployment={_deployments_mockup[2]} />

      <h2>Typography</h2>

      <Typography tagName="h1" size="l">philip1967/my-awesome-repo</Typography>

      <Typography tagName="p" theme="grey" size="xs">Configure repository connection and synchronization settings.</Typography>

      <div style={{ display: 'flex' }}>
        <Icon name="icon-calendar" />
        <Typography
          size="xs"
          tagName="p"
        >
          Primary
        </Typography>
      </div>

      <h2>Inputs</h2>

      <TextField label="Field top" value="I am input" isRequired />

      <TextField label="Field left" value="Are you happy?" labelPosition="left" />

      <TextField value="I am disabled" isDisabled />

      <h2>Buttons</h2>

      <Button>Save</Button>

      <Button theme="secondary">Cancel</Button>

      <Button
        iconLeft={<Icon name="icon-play" size="xs" />}
        isDisabled
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

      <Footer />
    </div>,
    document.getElementById('root'),
  );
};

createApp();
