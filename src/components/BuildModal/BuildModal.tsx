import React from 'react';

import classNames from 'classnames';
import { isEmpty } from 'ramda';

import Button from 'UiKit/components/Button';
import Modal, { ModalProps } from 'UiKit/components/Modal';
import Typography from 'UiKit/components/Typography';

import CommitSuggest from '@/components/CommitSuggest';
import { getCommits, isInvalidCommitHash } from '@/entities/commit';

import styles from './BuildModal.module.css';

type BuildModalProps = Omit<ModalProps, 'title' | 'cancelButton' | 'okButton'> & {
  onAddBuild?: (commitHash: string) => void;
};

const BuildModal: React.FC<BuildModalProps> = (props) => {
  const { onClose = () => undefined, onAddBuild = (value) => value, ...otherProps } = props;

  const [commits, setCommits] = React.useState<Commit[]>([]);
  const [commitHash, setCommitHash] = React.useState('');

  React.useEffect(() => {
    getCommits().then(setCommits);
  }, []);

  const isInvalid = isEmpty(commitHash) || isInvalidCommitHash(commitHash, commits);

  const handleClose = (): void => {
    setCommitHash('');
    onClose();
  };

  const handleAdd = (): void => {
    onAddBuild(commitHash);
  };

  return (
    <Modal
      {...otherProps}
      cancelButton={<Button onClick={handleClose}>Cancel</Button>}
      okButton={
        <Button isDisabled={isInvalid} onClick={handleAdd} view="action">
          Run build
        </Button>
      }
      onClose={handleClose}
      title="New build"
    >
      <Typography className={classNames(styles.buildModalDescription)} size="xs">
        Enter the commit hash which you want to build.
      </Typography>

      <CommitSuggest commits={commits} onChange={setCommitHash} value={commitHash} />
    </Modal>
  );
};

export default BuildModal;
