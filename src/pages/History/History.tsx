import React from 'react';

import classNames from 'classnames';

import Button from 'UiKit/components/Button';
import Icon from 'UiKit/components/Icon';
import IconButton from 'UiKit/components/IconButton';
import Typography from 'UiKit/components/Typography';

import BuildCard from '@/components/BuildCard';
import BuildModal from '@/components/BuildModal';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import RoutePaths from '@/router/paths';

import builds from '../../../_builds_mockup.json';

import styles from './History.module.css';

type HistoryProps = {
  connectSettings: ConnectSettings;
}

const History: React.FC<HistoryProps> = (props) => {
  const { connectSettings } = props;

  const [isBuildModalOpen, setBuildModalOpen] = React.useState(false);

  const toggleBuildModal = (): void => {
    setBuildModalOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Layout header={(
      <Header>
        <Typography size="l" tagName="h1">{connectSettings.repository}</Typography>

        <div className={classNames(styles.historyControls)}>
          <Button
            className={classNames(styles.historyControl)}
            iconLeft={<Icon size="xs" name="icon-play" />}
            onClick={toggleBuildModal}
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
      {builds.map((build) => (
        // @ts-ignore
        <BuildCard className={classNames(styles.historyCard)} build={build} key={build.id} />
      ))}

      <Button size="s" theme="secondary">Show more</Button>

      <BuildModal
        isOpen={isBuildModalOpen}
        onClose={toggleBuildModal}
      />
    </Layout>
  );
};

export default History;
