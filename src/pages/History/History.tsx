import React from 'react';

import classNames from 'classnames';

import Button from 'UiKit/components/Button';
import Icon from 'UiKit/components/Icon';
import IconButton from 'UiKit/components/IconButton';
import Typography from 'UiKit/components/Typography';
import Modal from 'UiKit/components/Modal';

import BuildCard from '@/components/BuildCard';
import CommitSuggest from '@/components/CommitSuggest';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import RoutePaths from '@/router/paths';
import { getCommits, isInvalidCommitHash } from '@/entities/commit';

import builds from '../../../_builds_mockup.json';

import styles from './History.module.css';

type HistoryProps = {
  connectSettings: ConnectSettings;
}

const History: React.FC<HistoryProps> = (props) => {
  const { connectSettings } = props;

  const [commits, setCommits] = React.useState<Commit[]>([]);
  const [commitHash, setCommitHash] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const isInvalidCommit = isInvalidCommitHash(commitHash, commits);

  const toggleModal = (): void => {
    setIsModalOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClose = (): void => {
    setCommitHash('');
    toggleModal();
  };

  React.useEffect(() => {
    getCommits().then(setCommits);
  }, []);

  return (
    <Layout header={(
      <Header>
        <Typography size="l" tagName="h1">{connectSettings.repository}</Typography>

        <div className={classNames(styles.historyControls)}>
          <Button
            className={classNames(styles.historyControl)}
            iconLeft={<Icon size="xs" name="icon-play" />}
            onClick={toggleModal}
            size="s"
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

      <Button size="s">Show more</Button>

      <Modal
        cancelButton={<Button onClick={handleClose}>Cancel</Button>}
        description="Enter the commit hash which you want to build."
        isOpen={isModalOpen}
        okButton={
          <Button isDisabled={isInvalidCommit} view="action">
            Run build
          </Button>
        }
        onClose={toggleModal}
        title="New build"
      >
        <CommitSuggest commits={commits} onChange={setCommitHash} value={commitHash} />
      </Modal>
    </Layout>
  );
};

export default History;
