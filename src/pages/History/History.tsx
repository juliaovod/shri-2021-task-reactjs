import React from 'react';

import classNames from 'classnames';

import Button from 'UiKit/components/Button';
import Icon from 'UiKit/components/Icon';
import IconButton from 'UiKit/components/IconButton';
import Typography from 'UiKit/components/Typography';

import DeployCard from '@/components/DeployCard';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import RoutePaths from '@/router/paths';

import deploys from '../../../_deployments_mockup.json';

import styles from './History.module.css';

type HistoryProps = {
  connectSettings: ConnectSettings;
}

const History: React.FC<HistoryProps> = (props) => {
  const { connectSettings } = props;

  return (
    <Layout header={(
      <Header>
        <Typography size="l" tagName="h1">{connectSettings.repository}</Typography>

        <div className={classNames(styles.historyControls)}>
          <Button
            className={classNames(styles.historyControl)}
            iconLeft={<Icon size="xs" name="icon-play" />}
            size="s"
            theme="secondary"
          >
            Run build
          </Button>

          <IconButton className={classNames(styles.historyControl)} path={RoutePaths.SETTINGS.PATH}>
            <Icon name="icon-settings" />
          </IconButton>
        </div>
      </Header>
    )}
    >
      {deploys.map((deploy) => (
        // @ts-ignore
        <DeployCard className={classNames(styles.historyCard)} deploy={deploy} key={deploy.id} />
      ))}

      <Button size="s" theme="secondary">Show more</Button>
    </Layout>
  );
};

export default History;
