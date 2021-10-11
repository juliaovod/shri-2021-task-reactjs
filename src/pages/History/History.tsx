import React from 'react';

import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'UiKit/components/Button';
import Icon from 'UiKit/components/Icon';
import IconButton from 'UiKit/components/IconButton';
import Typography from 'UiKit/components/Typography';

import BuildCard from '@/components/BuildCard';
import BuildModal from '@/components/BuildModal';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import RoutePaths from '@/router/paths';
import { buildsSelector } from '@/selectors/builds';
import { connectSettingsSelector } from '@/selectors/connect-settings';
import { fetchBuilds } from '@/store/modules/builds';

import styles from './History.module.css';

const History: React.FC = () => {
  const dispatch = useDispatch();

  const builds = useSelector(buildsSelector);
  const connectSettings = useSelector(connectSettingsSelector);

  const [isBuildModalOpen, setBuildModalOpen] = React.useState(false);

  const toggleBuildModal = (): void => {
    setBuildModalOpen((prevIsOpen) => !prevIsOpen);
  };

  React.useEffect(() => {
    dispatch(fetchBuilds());
  }, []);

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
      {builds.map((build: Build) => (
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
