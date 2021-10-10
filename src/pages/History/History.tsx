import React from 'react';

// import classNames from 'classnames';

import Button from 'UiKit/components/Button';
import Icon from 'UiKit/components/Icon';
import IconButton from 'UiKit/components/IconButton';
import Typography from 'UiKit/components/Typography';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import RoutePaths from '@/router/paths';

// import styles from './History.module.css';

type HistoryProps = {
  connectSettings: ConnectSettings;
}

const History: React.FC<HistoryProps> = (props) => {
  const { connectSettings } = props;

  return (
    <Layout header={(
      <Header>
        <Typography size="l" tagName="h1">{connectSettings.repository}</Typography>

        <div>
          <Button iconLeft={<Icon name="icon-play" />} theme="secondary">
            Run build
          </Button>

          <IconButton path={RoutePaths.SETTINGS.PATH}>
            <Icon name="icon-settings" />
          </IconButton>
        </div>
      </Header>
    )}
    >
      build list
    </Layout>
  );
};

export default History;
