import React from 'react';

import classNames from 'classnames';

import Button from 'UiKit/components/Button';
import Icon from 'UiKit/components/Icon';
import Typography from 'UiKit/components/Typography';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import RoutePaths from '@/router/paths';

import styles from './Start.module.css';

const Start: React.FC = () => (
  <Layout header={(
    <Header>
      <Typography size="l" tagName="h1" theme="grey">School CI server</Typography>

      <Button
        iconLeft={<Icon name="icon-settings" />}
        path={RoutePaths.SETTINGS.PATH}
        theme="secondary"
      >
        Settings
      </Button>
    </Header>
  )}
  >
    <div className={classNames(styles.start)}>
      <div className={classNames(styles.startShape)} />

      <Typography className={classNames(styles.startText)} size="xs">
        Configure repository connection
        <br />
        and synchronization settings
      </Typography>

      <Button path={RoutePaths.SETTINGS.PATH}>Open settings</Button>
    </div>
  </Layout>
);

export default Start;
