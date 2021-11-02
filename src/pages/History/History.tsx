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
import { getBuilds, addBuild } from '@/entities/build';
import { buildCommitsMap, getCommits, isInvalidCommitHash } from '@/entities/commit';

import styles from './History.module.css';

type HistoryProps = {
  connectSettings: ConnectSettings;
}

const History: React.FC<HistoryProps> = (props) => {
  const { connectSettings } = props;

  const [builds, setBuilds] = React.useState<Build[]>([]);
  const [commits, setCommits] = React.useState<Commit[]>([]);
  const [commitHash, setCommitHash] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false);

  const isInvalidCommit = isInvalidCommitHash(commitHash, commits);

  const commitsMap = buildCommitsMap(commits);

  const toggleModal = (): void => {
    setIsModalOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClose = (): void => {
    setCommitHash('');
    toggleModal();
  };

  const handleAdd = async (): Promise<void> => {
    if (isInvalidCommit) {
      return;
    }

    setIsFetching(true);

    const build = await addBuild(commitsMap[commitHash]);
    setBuilds((prevBuilds) => [build, ...prevBuilds]);

    const TIMEOUT = 1000;
    setTimeout(() => {
      setIsFetching(false);
      handleClose();
    }, TIMEOUT);
  };

  React.useEffect(() => {
    getBuilds().then(setBuilds);
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
        <BuildCard className={classNames(styles.historyCard)} build={build} key={build.id} />
      ))}

      <Button size="s">Show more</Button>

      <Modal
        cancelButton={<Button onClick={handleClose}>Cancel</Button>}
        description="Enter the commit hash which you want to build."
        isFetching={isFetching}
        isOpen={isModalOpen}
        okButton={
          <Button isDisabled={isInvalidCommit} onClick={handleAdd} view="action">
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
